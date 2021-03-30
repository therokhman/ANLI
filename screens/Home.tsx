import React from 'react';
import { View } from 'react-native';
import MyButton from "../MyButton";

const Home = (props: HomeProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingTop: 30, paddingBottom: 40 }}>
            <View style={{ width: "90%", display: "flex", alignItems: 'stretch', justifyContent: 'space-between' }}>
                <MyButton text={'Мои уведомления'} onPress={() => {props.navigation.navigate('notifications')}} />
            </View>
            <View style={{ width: "90%", display: "flex", flexDirection: "row", alignItems: 'stretch', justifyContent: 'space-between' }}>
                <MyButton text={'Мой \nПрофиль'} onPress={() => {props.navigation.navigate('profileContainer')}} />
                <MyButton text={'Режимы'} onPress={() => {props.navigation.navigate('modesContainer')}} />
                <MyButton text={'Гигиена\n полости\n рта'} onPress={() => {props.navigation.navigate('hygiene')}} />
                <MyButton text={'Спец \nпрограм-\nмы'} onPress={() => {props.navigation.navigate('programsContainer')}} />
            </View>
        </View>
    );
}


interface HomeProps {
    navigation: any
}

export default Home;