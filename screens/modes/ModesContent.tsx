import React from 'react';
import {Text, View} from "react-native";

const ModesContent = ({route}: any) => {
    const params: ModesInterface = route.params;
    return (
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 70}}>
            <Text style={{textAlign: 'center'}}>{params.header}</Text>
            <Text style={{textAlign: 'center', fontWeight: '900'}}>{params.textBold1}</Text>
            <Text style={{textAlign: 'center'}}>{params.text1}</Text>
            <Text style={{textAlign: 'center', fontWeight: '900'}}>{params.textBold2}</Text>
            <Text style={{textAlign: 'center'}}>{params.text2}</Text>
            <Text style={{textAlign: 'center', fontWeight: '900'}}>{params.textBold3}</Text>
            <Text style={{textAlign: 'center'}}>{params.text3}</Text>
        </View>
    );
}

export default ModesContent;