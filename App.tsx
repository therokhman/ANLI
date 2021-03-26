import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from "./screens/Home";
import Profile from "./screens/profile/Profile";
import Hygiene from "./screens/hygiene/Hygiene";
import Programs from "./screens/programs/Programs";
import Modes from "./screens/modes/Modes";
import Standard from "./screens/modes/Standard";
import Martaller from "./screens/modes/Martaller";
import KAI from "./screens/modes/KAI";
import Braces from "./screens/programs/Braces";
import Fresh from "./screens/programs/Fresh";
import Gumprotect from "./screens/programs/Gumprotect";
import Teethwhite from "./screens/programs/Teethwhite";

import MyButton from './MyButton'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={Home} options={{ title: 'Главная' }} />
                <Stack.Screen name="programs" component={Programs} options={{ title: 'Специальные программы', headerBackTitleVisible: false }} />
                <Stack.Screen name="modes" component={Modes} options={{ title: 'Режимы', headerBackTitleVisible: false }} />
                <Stack.Screen name="hygiene" component={Hygiene} options={{ title: 'Гигиена полости рта', headerBackTitleVisible: false  }} />
                <Stack.Screen name="profile" component={Profile} options={{ title: 'Мой профиль', headerBackTitleVisible: false }} />
                <Stack.Screen name="standard" component={Standard} options={{ title: 'Стандартный метод', headerBackTitleVisible: false }} />
                <Stack.Screen name="martaller" component={Martaller} options={{ title: 'Метод Марталлера', headerBackTitleVisible: false }} />
                <Stack.Screen name="kai" component={KAI} options={{ title: 'Метод KAI', headerBackTitleVisible: false }} />
                <Stack.Screen name="braces" component={Braces} options={{ title: 'Уход за брекет-системой', headerBackTitleVisible: false }} />
                <Stack.Screen name="fresh" component={Fresh} options={{ title: 'Свежесть дыхания', headerBackTitleVisible: false }} />
                <Stack.Screen name="gumprotect" component={Gumprotect} options={{ title: 'Защита десен', headerBackTitleVisible: false }} />
                <Stack.Screen name="teethwhite" component={Teethwhite} options={{ title: 'Отбеливание зубов', headerBackTitleVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// @ts-ignore
const Stack = createStackNavigator();