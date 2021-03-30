import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Profile from "./Profile";
import Journal from "./Journal";
import Notes from "./Notes";

const ProfileContainer = () => {
    return(
            <Stack.Navigator initialRouteName="profile">
                <Stack.Screen name="profile" component={Profile} options={{ title: 'Мой профиль', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'}}} />
                <Stack.Screen name="journal" component={Journal} options={{ title: 'Журнал чистки зубов', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'}}} />
                <Stack.Screen name="notes" component={Notes} options={{ title: 'Заметки', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'}}} />
            </Stack.Navigator>
    )
}

const Stack = createStackNavigator();

export default ProfileContainer;