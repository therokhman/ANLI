import React from 'react';
import {Image, Text, View} from "react-native";
import {JournalMode} from "./JournalModeEnum";
import JournalButton from "./JournalButton";
import teeth from '../../assets/teeth.png';
import JournalModel from "./JournalModel";
import {ActionsEnum} from "./ActionsEnum"
import {JournalSettings} from "./JournalSettings";

const JournalContent = ({route}: any) => {
    const mode: JournalMode = route.params.mode
    console.log('init', mode);

    return (
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 70, alignItems: 'center'}}>
            <Text>
                <Text style={{fontWeight: 'bold'}}>{mode}</Text>
            </Text>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <JournalButton text={'test'} image={teeth} mode={mode} action={ActionsEnum.morningCleaning} />
                    <JournalButton text={'test'} image={teeth} mode={mode} action={ActionsEnum.noonCleaning} />
                    <JournalButton text={'test'} image={teeth} mode={mode} action={ActionsEnum.nightCleaning} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <JournalButton text={'test'} image={teeth} mode={mode} action={ActionsEnum.rinsing} />
                    <JournalButton text={'test'} image={teeth} mode={mode} action={ActionsEnum.tongueCleaning} />
                    <JournalButton text={'test'} image={teeth} mode={mode} action={ActionsEnum.flossing} />
                </View>
            </View>
        </View>
    );
}

export default JournalContent;