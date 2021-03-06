import React from 'react';
import {View,  Image} from 'react-native';
import MyButton from "../MyButton";
import Container from "./Container";

const Home = (props: HomeProps) => {
    const img = {
        uri: Image.resolveAssetSource(require('../assets/jaw.png')).uri,
        width: 295,
        height: 295
    }
    return (
        <Container>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingTop: 30, paddingBottom: 40 }}>
            <Image source={img} style={{height: 380, marginTop: -175, position: 'absolute', top: '50%'}} />
            <View style={{ width: "90%", display: "flex", alignItems: 'stretch', justifyContent: 'space-between' }}>
                <MyButton text={'Мои уведомления'} onPress={() => {props.navigation.navigate('notifications')}} />
            </View>
            <View style={{display: "flex", alignItems: 'stretch', justifyContent: 'space-between' }}>
                <MyButton text={'Начать \nЧистку'} onPress={() => {props.navigation.navigate('startContainer', {screen: 'algorithm1'})}} />
            </View>
            <View style={{ width: "90%", display: "flex", flexDirection: "row", alignItems: 'stretch', justifyContent: 'space-between' }}>
                <MyButton text={'Мой \nПрофиль'} onPress={() => {props.navigation.navigate('profileContainer')}} />
                <MyButton text={'Режимы'} onPress={() => {props.navigation.navigate('modesContainer')}} />
                <MyButton text={'Гигиена\n полости\n рта'} onPress={() => {props.navigation.navigate('hygiene')}} />
                <MyButton text={'Спец \nпрограм-\nмы'} onPress={() => {props.navigation.navigate('programsContainer')}} />
            </View>
        </View>
        </Container>
    );
}

interface HomeProps {
    navigation: any
}

export default Home;
