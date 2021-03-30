import React from 'react';
import {View} from 'react-native';
import MyButton from "../../MyButton";

const Programs = (props: ProgramsProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 80 }}>
            <View style={{width: '100%', borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                <MyButton fullWidth={true} text={'Отбеливание зубов'} onPress={() => {props.navigation.navigate('teethwhite')}} />
            </View>
            <View style={{width: '100%', marginTop: 10, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                <MyButton fullWidth={true} text={'Защита десен'} onPress={() => {props.navigation.navigate('gumprotect')}} />
            </View>
            <View style={{width: '100%', marginTop: 10, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                <MyButton fullWidth={true} text={'Уход за брекет-системой'} onPress={() => {props.navigation.navigate('braces')}} />
            </View>
            <View style={{width: '100%', marginTop: 10, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                <MyButton fullWidth={true} text={'Свежесть дыхания'} onPress={() => {props.navigation.navigate('fresh')}} />
            </View>
        </View>
    );
}


interface ProgramsProps {
    navigation: any
}

export default Programs;