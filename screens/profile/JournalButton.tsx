import React from 'react';
import {GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {JournalMode} from "./JournalModeEnum";
import JournalModel from "./JournalModel";
import {ActionsEnum} from "./ActionsEnum";
import {inject, observer} from "mobx-react";

@inject('rootStore')
@observer
class JournalButton extends React.Component<JournalButtonProps, {}> {
    img: any;
    constructor(props: JournalButtonProps) {
        super(props);

        this.img = {
            uri: Image.resolveAssetSource(props.image).uri,
            width: props.width || 70,
            height: props.height || 37,
        }

        console.log(this.img);
    }

    render() {
        // @ts-ignores
        let {actions, settings} = JSON.parse(this.props.rootStore.modelData);
        let model = new JournalModel(actions, settings);
        let isEnabled = this.props.mode === JournalMode.DAY
            && model.currentValue(this.props.action, this.props.mode)
            < model.totalValue(this.props.action, this.props.mode);
        return (
            <TouchableOpacity
                disabled={!isEnabled}
                style={styles.button}
                onPress={() => {
                    if (isEnabled) {
                        model.add(this.props.action);
                        this.props.rootStore?.update(model.toString());
                    }
                }}
            >
                <Image source={this.img} style={{height: 37}}/>
                <Text style={styles.text}>
                    {this.props.text}
                    {/*{this.props.action}*/}
                </Text>
                <Text style={styles.counter}>
                    {model.currentValue(this.props.action, this.props.mode)}/{model.totalValue(this.props.action, this.props.mode)}
                </Text>
            </TouchableOpacity>
        );
    }
}

// const JournalButton = (props: JournalButtonProps) => {
//     const {model, setModel} = useJournal();
//     const img = {
//         uri: Image.resolveAssetSource(props.image).uri,
//         width: 30,
//         height: 30,
//     }
//     console.log('update');
//     console.log(model);
//     return (
//         <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//                 model.add(props.action);
//                 setModel(model);
//             }}
//         >
//             <Image source={img} style={{height: 30}} />
//             <Text style={styles.text}>
//                 {/*{props.text}*/}
//                 {props.action}
//             </Text>
//             <Text style={styles.text}>
//                 {model.currentValue(props.action, props.mode)}/{model.totalValue(props.action, props.mode)}
//             </Text>
//         </TouchableOpacity>
//     );
// }

interface JournalButtonProps {
    text: string;
    image: ImageSourcePropType;
    height?: number,
    width?: number,
    mode: JournalMode;
    action: ActionsEnum;
    onPress?: (event: GestureResponderEvent) => void;
    rootStore?: {
        modelData: string;
        update: (data: string) => void;
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#010907',
        textAlign: 'center'
    },
    counter: {
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#83aba4',
        borderRadius: 10,
        borderColor: '#0d3c34',
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        padding: 5,
    }
});

export default JournalButton;