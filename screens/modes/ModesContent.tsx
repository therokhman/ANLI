import React from 'react';
import {Text, View} from "react-native";

const ModesContent = ({route}: any) => {
    const params: ModesInterface = route.params;
    return (
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 70}}>
            <Text style={{textAlign: 'justify'}}>{params.header}</Text>
            <Text style={{textAlign: 'center', fontWeight: '900', borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 5, backgroundColor: '#dbebe8'}}>{params.textBold1}</Text>
            <Text style={{textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 5, backgroundColor: '#dbebe8'}}>{params.text1}</Text>
            <Text style={{textAlign: 'center', fontWeight: '900', borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 5, backgroundColor: '#dbebe8'}}>{params.textBold2}</Text>
            <Text style={{textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 5, backgroundColor: '#dbebe8'}}>{params.text2}</Text>
            <Text style={{textAlign: 'center', fontWeight: '900', borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 5, backgroundColor: '#dbebe8'}}>{params.textBold3}</Text>
            <Text style={{textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 5, backgroundColor: '#dbebe8'}}>{params.text3}</Text>
        </View>
    );
}

export default ModesContent;