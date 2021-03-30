import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    GestureResponderEvent,
    StyleProp,
    ImageSourcePropType,
    Image
} from 'react-native';
import {JournalMode} from "./JournalModeEnum";
import JournalModel from "./JournalModel";
import {ActionsEnum} from "./ActionsEnum";
import {useJournal} from "../../JournalContext";

const JournalButton = (props: JournalButtonProps) => {
    const {model, setModel} = useJournal();
    const img = {
        uri: Image.resolveAssetSource(props.image).uri,
        width: 30,
        height: 30,
    }
    console.log(model);
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {model.add(props.action); setModel(model);}}
        >
            <Image source={img} style={{height: 30}} />
            <Text style={styles.text}>
                {/*{props.text}*/}
                {props.action}
            </Text>
            <Text style={styles.text}>
                {model.currentValue(props.action, props.mode)}/{model.totalValue(props.action, props.mode)}
            </Text>
        </TouchableOpacity>
    );
}

interface JournalButtonProps {
    text: string;
    image: ImageSourcePropType;
    mode: JournalMode;
    action: ActionsEnum;
    onPress?: (event: GestureResponderEvent) => void;
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'rgb(33, 150, 243)',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%'
    }
});

export default JournalButton;