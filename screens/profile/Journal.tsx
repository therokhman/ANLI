import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import JournalContent from "./JournalContent";
import {JournalMode} from "./JournalModeEnum";
import JournalModel from "./JournalModel";
import {ActionsEnum} from "./ActionsEnum";
import {JournalSettings} from "./JournalSettings";
import {Provider} from "mobx-react";

import {types} from "mobx-state-tree"

const RootStore = types.model({
    modelData: types.string,
}).actions(
    self => ({
        update(newModelData: string) {
            self.modelData = newModelData;
        }
    })
);

const rootStore = RootStore.create( {
    modelData: (new JournalModel({}, {[ActionsEnum.rinsing]: 3} as JournalSettings)).toString(),
})

function getStoreDefinition(): any {
    let journalProps: any = {};
    let settingsProps: any = {};
    Object.keys(ActionsEnum).forEach(el => {
        journalProps[el] = types.array(types.number);
        settingsProps[el] = types.number;
    })
    return types.model({
        modelData: types.model({
            journal: types.model(journalProps),
            settings: types.model(settingsProps)
        }),
    });
}

const Journal = () => {
    return (
        <Provider rootStore={rootStore}>
        <Tab.Navigator initialRouteName={'tongue'} tabBarOptions={{
            activeTintColor: '#020a08',
            style: { backgroundColor: '#83aba4'},
            labelStyle: {
                fontWeight: '700',
                margin: 0,
                padding: 0,
            },
        }}>
            <Tab.Screen name={JournalMode.DAY} component={JournalContent} options={{title: 'За день'}} initialParams = {{mode: JournalMode.DAY}} />
            <Tab.Screen name={JournalMode.WEEK} component={JournalContent} options={{title: 'За неделю'}} initialParams = {{mode: JournalMode.WEEK}} />
            <Tab.Screen name={JournalMode.MONTH} component={JournalContent} options={{title: 'За месяц'}} initialParams = {{mode: JournalMode.MONTH}} />
        </Tab.Navigator>
        </Provider>
    );
}

const Tab = createMaterialTopTabNavigator();

export default Journal;