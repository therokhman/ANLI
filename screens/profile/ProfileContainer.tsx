import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Profile from "./Profile";
import Journal from "./Journal";

const ProfileContainer = () => {
    return(
            <Stack.Navigator initialRouteName="profile">
                <Stack.Screen name="profile" component={Profile} options={{ title: 'Мой профиль', headerBackTitleVisible: false }} />
                <Stack.Screen name="journal" component={Journal} options={{ title: 'Журнал чистки зубов', headerBackTitleVisible: false }} />
            </Stack.Navigator>
    )
}

const Stack = createStackNavigator();

export default ProfileContainer;