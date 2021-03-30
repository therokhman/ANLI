import 'react-native-gesture-handler';
import React, {createContext} from 'react';
import Home from "./screens/Home";
import Hygiene from "./screens/hygiene/Hygiene";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileContainer from "./screens/profile/ProfileContainer";
import ProgramsContainer from "./screens/programs/ProgramsContainer";
import ModesContainer from "./screens/modes/ModesContainer";
import Notifications from "./screens/Notifications"
import JournalModel from "./screens/profile/JournalModel";
import {ActionsEnum} from "./screens/profile/ActionsEnum";
import {JournalSettings} from "./screens/profile/JournalSettings";
import {JournalContext} from "./JournalContext";

export default function App() {
    const [model, setModel] = React.useState(new JournalModel({}, {[ActionsEnum.rinsing]: 3} as JournalSettings));
    return (
        <JournalContext.Provider value={{ model, setModel}}>
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
        </JournalContext.Provider>
    );
}

const Stack = createStackNavigator();