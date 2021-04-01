import React from 'react';
import {View} from "react-native";
import {JournalMode} from "./JournalModeEnum";
import JournalButton from "./JournalButton";
import {ActionsEnum} from "./ActionsEnum"

const JournalContent = ({route}: any) => {
    const mode: JournalMode = route.params.mode
    console.log('init', mode);

    return (
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: '40%', alignItems: 'center'}}>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <JournalButton text={'Утренняя чистка'} image={require('../../assets/morning.png')} mode={mode} action={ActionsEnum.morningCleaning} />
                    <JournalButton text={'Дневная чистка'} image={require('../../assets/noon.png')} mode={mode} action={ActionsEnum.noonCleaning} />
                    <JournalButton text={'Вечерняя чистка'} image={require('../../assets/night.png')} mode={mode} action={ActionsEnum.nightCleaning} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <JournalButton text={'Ополаскиватель'} image={require('../../assets/rinsing.png')} height={100} width={20} mode={mode} action={ActionsEnum.rinsing} />
                    <JournalButton text={'Чистка языка'} image={require('../../assets/tongue.png')} mode={mode} action={ActionsEnum.tongueCleaning} />
                    <JournalButton text={'Флоссинг'} image={require('../../assets/flossing.png')} height={140} width={34} mode={mode} action={ActionsEnum.flossing} />
                </View>
            </View>
        </View>
    );
}

export default JournalContent;