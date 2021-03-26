import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import JournalContent from "./JournalContent";
import {JournalMode} from "./JournalModeEnum";

const Journal = (props: any) => {
    return (
        <Tab.Navigator initialRouteName={'tongue'}>
            <Tab.Screen name={JournalMode.DAY} component={JournalContent} options={{title: 'За день'}} initialParams = {{mode: JournalMode.DAY}} />
            <Tab.Screen name={JournalMode.WEEK} component={JournalContent} options={{title: 'За неделю'}} initialParams = {{mode: JournalMode.WEEK}} />
            <Tab.Screen name={JournalMode.MONTH} component={JournalContent} options={{title: 'За месяц'}} initialParams = {{mode: JournalMode.MONTH}} />
        </Tab.Navigator>
    );
}

const Tab = createMaterialTopTabNavigator();

export default Journal;