import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from "../../MyButton";

const Profile = (props: ProfileProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <MyButton text={'Test'} onPress={() => {props.navigation.navigate('home')}} />
        </View>
    );
}


interface ProfileProps {
    navigation: any
}

export default Profile;