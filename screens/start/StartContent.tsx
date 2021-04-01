import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from "react-native";
import { ProgressBar } from 'react-native-paper';
import {StartInterface} from "./StartInterface";


const RadioButton = ( props: StartProps ) => {
    return (
        <View style={styles.radioButtonContainer}>
            <TouchableOpacity onPress={props.onPress} style={styles.radioButton}>
                {props.selected ? <View style={styles.radioButtonIcon} /> : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.radioButtonText}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    );
};

class StartContent extends Component<{ route: any }, any> {
    params: StartInterface = {} as StartInterface;
    teeth: any = {};
    onRadioBtnClick: any;
    timerId: any = null;

    componentWillUnmount() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    callback() {
        if (this.state.count === 0) {
            this.setState({
                isLiked: [ { id: 1, value: true, name: "Чистка верхней челюсти", selected: true },
                    { id: 2, value: false, name: "Чистка нижней челюсти", selected: false }]
            });
            this.setState({
                t1Color: 'red',
                t2Color: 'black',
                t3Color: 'black'
            });
        }

        if (this.state.count === 12) {
            this.setState({
                isLiked: [ { id: 1, value: true, name: "Чистка верхней челюсти", selected: false },
                    { id: 2, value: false, name: "Чистка нижней челюсти", selected: true }]
            });
            this.setState({
                t1Color: 'white',
                t2Color: 'black',
                t3Color: 'black'
            });
        }

        if (this.state.count === 24) {
            this.setState({
                isLiked: [ { id: 1, value: true, name: "Чистка верхней челюсти", selected: true },
                    { id: 2, value: false, name: "Чистка нижней челюсти", selected: false }]
            });
            this.setState({
                t1Color: 'black',
                t2Color: 'red',
                t3Color: 'black'
            });
        }

        if (this.state.count === 32) {
            this.setState({
                isLiked: [ { id: 1, value: true, name: "Чистка верхней челюсти", selected: false },
                    { id: 2, value: false, name: "Чистка нижней челюсти", selected: true }]
            });
            this.setState({
                t1Color: 'black',
                t2Color: 'white',
                t3Color: 'black'
            });
        }

        if (this.state.count === 40) {
            this.setState({
                isLiked: [ { id: 1, value: true, name: "Чистка верхней челюсти", selected: true },
                    { id: 2, value: false, name: "Чистка нижней челюсти", selected: false }]
            });
            this.setState({
                t1Color: 'black',
                t2Color: 'black',
                t3Color: 'red'
            });
        }

        if (this.state.count === 45) {
            this.setState({
                isLiked: [ { id: 1, value: true, name: "Чистка верхней челюсти", selected: false },
                    { id: 2, value: false, name: "Чистка нижней челюсти", selected: true }]
            });
            this.setState({
                t1Color: 'black',
                t2Color: 'black',
                t3Color: 'white'
            });
        }

        if (this.state.count === 50) {
            clearInterval(this.timerId);
            this.timerId = null;
            //TODO: navigate next screen
        }

        this.setState({
            count: this.state.count + 1,
        });
        console.log(this.state.count)
    }

    constructor(props: any) {
        super(props);
        this.state = {
            isLiked: [ { id: 1, value: true, name: "Чистка верхней челюсти", selected: true },
                { id: 2, value: false, name: "Чистка нижней челюсти", selected: false }],
            count: 0,
            t1Color: 'black',
            t2Color: 'black',
            t3Color: 'black'
        }
        this.params = props.route.params;
        this.teeth = {
            uri: Image.resolveAssetSource(this.params.uri).uri,
            width: 225,
            heigth: 225
        };
        this.onRadioBtnClick = (function(item: any) {
            // @ts-ignores
            let updatedState = this.state.isLiked.map((isLikedItem: any) =>
                isLikedItem.id === item.id
                    ? { ...isLikedItem, selected: true }
                    : { ...isLikedItem, selected: false }
            );
            // @ts-ignores
            // this.setIsLiked(updatedState);
            this.setState({
                isLiked: updatedState
            });
        }).bind(this);

        this.timerId = setInterval(this.callback.bind(this), 1000);
    }

    getTextStyle(color: string) {
        return StyleSheet.create({
            text: {
                textAlign: 'center',
                fontWeight: 'bold',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 10,
                marginTop: 5,
                backgroundColor: '#dbebe8',
                color: color
            }
        });
    };

    render() {
        return (
            <><View style={styles.app}>
                {this.state.isLiked.map((item: any) => (
                    <RadioButton onPress={() => this.onRadioBtnClick(item)} selected={item.selected} key={item.id}>
                        {item.name}
                    </RadioButton>
                ))}
            </View>
                <Image source={this.teeth} style={{height: 300, marginTop: 15, marginBottom: 10, marginLeft: 75}} />
                <View style={styles.counterView}>
                    <Text style={styles.counter}>{this.state.count < 51 ? 50 - this.state.count : 0}</Text>
                </View>
                <ProgressBar progress={ this.state.count / 50 } color={'#4194f2'} style={{justifyContent: 'space-between'}}/>
                <View style={{justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{this.params.header}</Text>
                    <Text style={this.getTextStyle(this.state.t1Color).text}>{this.params.text1}
                        <Text style={this.getTextStyle(this.state.t2Color).text}>{this.params.text2}</Text>
                        <Text style={this.getTextStyle(this.state.t3Color).text}>{this.params.text3}</Text>
                    </Text>
                </View></>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        maxWidth: 500,
        justifyContent: 'space-between',
        marginLeft: 80,
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16
    },
    counter: {
        fontSize: 30,
        textAlign: 'center'
    },
    counterView: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        width: '10%',
        marginLeft: 170,
        marginBottom: 5,
        backgroundColor: '#5bc7a5'
    }
});

interface StartProps {
    onPress: any,
    selected: any,
    children: any
}

export default StartContent;