import React from 'react';
import {Text, View} from "react-native";
import {JournalMode} from "./JournalModeEnum";

const JournalContent = ({route}: any) => {
    const mode: JournalMode | undefined = route.params?.mode;
    return (
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 70}}>
            <Text>
                <Text style={{fontWeight: 'bold'}}>{mode}</Text>
            </Text>
        </View>
    );
}

export default JournalContent;