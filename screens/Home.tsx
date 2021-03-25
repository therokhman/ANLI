import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from "../MyButton";

const Home = (props: HomeProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <View style={{ width: "90%", display: "flex", flexDirection: "row", alignItems: 'stretch', justifyContent: 'space-between' }}>
                <MyButton text={'Мой \nПрофиль'} onPress={() => {props.navigation.navigate('profile')}} />
                <MyButton text={'Режимы'} onPress={() => {props.navigation.navigate('modes')}} />
                <MyButton text={'Гигиена\n полости\n рта'} onPress={() => {props.navigation.navigate('hygiene')}} />
                <MyButton text={'Спец \nпрограм-\nмы'} onPress={() => {props.navigation.navigate('programs')}} />
            </View>
        </View>
    );
}


interface HomeProps {
    navigation: any
}

export default Home;