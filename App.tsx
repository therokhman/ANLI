import 'react-native-gesture-handler';
import React from 'react';
import Home from "./screens/Home";
import Hygiene from "./screens/hygiene/Hygiene";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileContainer from "./screens/profile/ProfileContainer";
import ProgramsContainer from "./screens/programs/ProgramsContainer";
import ModesContainer from "./screens/modes/ModesContainer";
import Notifications from "./screens/Notifications"

export default function App() {
    return (

            <NavigationContainer>
                <Stack.Navigator initialRouteName="home">
                    <Stack.Screen name="home" component={Home} options={{title: 'Главная', headerStyle: {backgroundColor: '#83aba4'}}}/>
                    <Stack.Screen name="programsContainer" component={ProgramsContainer}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name="modesContainer" component={ModesContainer} options={{headerShown: false}}/>
                    <Stack.Screen name="hygiene" component={Hygiene}
                                  options={{title: 'Гигиена полости рта', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'}}}/>
                    <Stack.Screen name="profileContainer" component={ProfileContainer} options={{headerShown: false}}/>
                    <Stack.Screen name="notifications" component={Notifications} options={{title: 'Мои уведомления', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'}}}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
}

const Stack = createStackNavigator();