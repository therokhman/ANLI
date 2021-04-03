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
import DBService from "./DBService";
import {ActionsEnum} from "./screens/profile/ActionsEnum";
import {applyPatch, applySnapshot, IJsonPatch, types} from "mobx-state-tree";
import {JournalType} from "./screens/profile/JournalType";
import {Provider} from "mobx-react";
import {JournalSettings} from "./screens/profile/JournalSettings";

import { configure } from "mobx"

configure({
    enforceActions: "never",
})

let db = new DBService();
const RootStore = getStoreDefinition();
function getStoreDefinition(): any {
    let journalProps: any = {};
    let settingsProps: any = {};
    Object.keys(ActionsEnum).forEach(el => {
        journalProps[el] = types.array(types.string);
        settingsProps[el] = types.number;
    })
    return types.model({
        journal: types.model({
            actions: types.model(journalProps),
            settings: types.model(settingsProps)
        }),
        messages: types.array(types.string),
        notes: types.array(types.model({
            date: types.string,
            stamp: types.string,
            blood: types.boolean,
            sensitivity: types.boolean,
            caries: types.boolean,
            pigmentations: types.boolean,
            tartar: types.boolean,
        }))
    })
        .actions(
        self => ({
            addAction(action: ActionsEnum) {
                let stamp = new Date().toISOString();
                db.addAction(action, stamp);
                let temp = self.journal;
                temp.actions[action].push(stamp);
                self.journal = temp;
            },
            addMessage() {
                db.addMessage((stamp: string) => {
                    let temp = self.messages;
                    temp.push(stamp);
                    self.messages = temp;
                })
            },
            addNote(noteDetails: NoteProps) {
                db.addNote(noteDetails,(stamp: string) => {
                    let temp = self.messages;
                    temp.push(stamp);
                    self.messages = temp;
                })
            }
        }));
}
const rootStore = RootStore.create(getInitialStore());

function getInitialStore() {
    return {
        journal: {
            actions: {
                morningCleaning : [],
                noonCleaning : [],
                nightCleaning : [],
                rinsing : [],
                tongueCleaning : [],
                flossing : []},
            settings: {
                morningCleaning : 1,
                noonCleaning : 1,
                nightCleaning : 1,
                rinsing : 3,
                tongueCleaning : 1,
                flossing : 1
            }
        },
        messages: [],
        notes: []
    }
}

db.actions((data: any)=> {
    let newActions: JournalType = {} as JournalType;
    data.forEach((el: any) => {
        if (newActions.hasOwnProperty(el.action)) {
            newActions[el.action as ActionsEnum].push(el.stamp);
        } else {
            newActions[el.action as ActionsEnum] = [el.stamp];
        }
    });
    applyPatch(rootStore, {
        op: 'replace',
        path: '/journal/actions',
        value: newActions
    });
});

db.notes((data: any)=> {
    applyPatch(rootStore, {
        op: 'replace',
        path: '/notes',
        value: data
    });
});

db.messages((data: any)=> {
    let newMessages: any = [];
    data.forEach((el: any) => {
        newMessages.push(el.stamp);
    });
    applyPatch(rootStore, {
        op: 'replace',
        path: '/messages',
        value: newMessages
    });
});

export default function App() {
    // useEffect(() => {
    //     SplashScreen.hide();
    // });
    return (
        <Provider rootStore={rootStore}>
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
        </Provider>
    );
}

const Stack = createStackNavigator();
