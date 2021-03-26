import 'react-native-gesture-handler';
import React from 'react';
import Home from "./screens/Home";
import Hygiene from "./screens/hygiene/Hygiene";
import Programs from "./screens/programs/Programs";
import Modes from "./screens/modes/Modes";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileContainer from "./screens/profile/ProfileContainer";

export default function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={Home} options={{ title: 'Главная' }} />
                <Stack.Screen name="programs" component={Programs} options={{ title: 'Специальные программы', headerBackTitleVisible: false }} />
                <Stack.Screen name="modes" component={Modes} options={{ title: 'Режимы', headerBackTitleVisible: false }} />
                <Stack.Screen name="hygiene" component={Hygiene} options={{ title: 'Гигиена полости рта', headerBackTitleVisible: false  }} />
                <Stack.Screen name="profileContainer" component={ProfileContainer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();
