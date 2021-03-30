import React from 'react';
import { View } from 'react-native';
import MyButton from "../../MyButton";

const Start = (props: StartProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <View style={{display: "flex", width: "100%"}}>
                <View style={{width: '100%', marginTop: 15, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                    <MyButton text={'АЛГОРИТМ 1'} fullWidth={true} onPress={() => {props.navigation.navigate('algorithm1')}} />
                </View>
                <View style={{width: '100%', marginTop: 15, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                    <MyButton text={'АЛГОРИТМ 2'} fullWidth={true} onPress={() => {props.navigation.navigate('algorithm2')}} />
                </View>
                <View style={{width: '100%', marginTop: 15, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                    <MyButton text={'АЛГОРИТМ 3'} fullWidth={true} onPress={() => {props.navigation.navigate('algorithm3')}} />
                </View>
            </View>
        </View>
    );
}


interface StartProps {
    navigation: any
}

export default Start;