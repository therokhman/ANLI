import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from "./screens/Home";
import Profile from "./screens/profile/Profile";
import Hygiene from "./screens/hygiene/Hygiene";
import Programs from "./screens/programs/Programs";
import Modes from "./screens/modes/Modes";

import MyButton from './MyButton'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={Home} options={{ title: 'Главная' }} />
                <Stack.Screen name="programs" component={Programs} options={{ title: 'Специальные программы', headerBackTitleVisible: false }} />
                <Stack.Screen name="modes" component={Modes} options={{ title: 'Режимы', headerBackTitleVisible: false }} />
                <Stack.Screen name="hygiene" component={Hygiene} options={{ title: 'Гигиена полости рта', headerBackTitleVisible: false  }} />
                <Stack.Screen name="profile" component={Profile} options={{ title: 'Мой профиль', headerBackTitleVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Stack = createStackNavigator();
