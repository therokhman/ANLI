import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from "../../MyButton";

const Programs = (props: ProgramsProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <View style={{display: "flex", width: "100%"}}>
                <View style={{width: '100%', marginTop: 15}}>
                    <MyButton text={'Отбеливание зубов'} fullWidth={true} onPress={() => {props.navigation.navigate('teethwhite')}} />
                </View>
                <View style={{width: '100%', marginTop: 15}}>
                    <MyButton text={'Защита десен'} fullWidth={true} onPress={() => {props.navigation.navigate('gumprotect')}} />
                </View>
                <View style={{width: '100%', marginTop: 15}}>
                    <MyButton text={'Уход за брекет-системой'} fullWidth={true} onPress={() => {props.navigation.navigate('braces')}} />
                </View>
                <View style={{width: '100%', marginTop: 15}}>
                    <MyButton text={'Свежесть дыхания'} fullWidth={true} onPress={() => {props.navigation.navigate('fresh')}} />
                </View>
            </View>
        </View>
    );
}


interface ProgramsProps {
    navigation: any
}

export default Programs;