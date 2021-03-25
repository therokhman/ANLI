import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from "../../MyButton";

const Programs = (props: ProgramsProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <MyButton text={'Test'} onPress={() => {props.navigation.navigate('home')}} />
        </View>
    );
}


interface ProgramsProps {
    navigation: any
}

export default Programs;