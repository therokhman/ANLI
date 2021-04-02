import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import React, {useEffect} from 'react';
import Home from "./screens/Home";
import Hygiene from "./screens/hygiene/Hygiene";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileContainer from "./screens/profile/ProfileContainer";
import ProgramsContainer from "./screens/programs/ProgramsContainer";
import ModesContainer from "./screens/modes/ModesContainer";
import Notifications from "./screens/Notifications"
import StartContainer from "./screens/start/StartContainer"
import * as SQLite from 'expo-sqlite';

// const db = SQLite.openDatabase('localDB.db');

export default function App() {
    // useEffect(() => {
    //     SplashScreen.hide();
    // });
    const [items, setItems] = React.useState(null);
    // db.transaction(tx => {
    //     tx.executeSql(
    //         `SELECT name FROM sqlite_master WHERE type='table' AND name='test'`,
    //         [],
    //         (_, { rows: { _array } }) => {setItems(_array); console.log(_array);},
    //         (_, rerror) => console.error(rerror)
    //     );
    // });
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
                    <Stack.Screen name="startContainer" component={StartContainer} options={{headerShown: false, headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'}}}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
}

const Stack = createStackNavigator();
