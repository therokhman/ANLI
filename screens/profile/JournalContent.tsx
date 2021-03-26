import React from 'react';
import {Image, Text, View} from "react-native";
import {JournalMode} from "./JournalModeEnum";
import JournalButton from "./JournalButton";
import teeth from '../../assets/teeth.png';

const JournalContent = ({route}: any) => {
    const mode: JournalMode | undefined = route.params?.mode;
    return (
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 70, alignItems: 'center'}}>
            <Text>
                <Text style={{fontWeight: 'bold'}}>{mode}</Text>
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
                <JournalButton text={'test'} image={teeth} />
                <JournalButton text={'test'} image={teeth} />
                <JournalButton text={'test'} image={teeth} />
                <JournalButton text={'test'} image={teeth} />
            </View>
        </View>
    );
}

export default JournalContent;