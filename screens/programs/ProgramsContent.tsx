import React from 'react';
import {Image, Text, View} from "react-native";

const ProgramsContent = ({route}: any) => {
    const params: ProgramsInterface = route.params;
    console.log(params);
    const teeth = {
        uri: params.uri,
        width: 300,
        heigth: 300
    }
    return (
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 70}}>
            <Text style={{marginTop: 30}}>
                {params?.text}
            </Text>
            <Image source={teeth} style={{height: 300, marginTop: 50, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto'}} />
        </View>
    );
}

export default ProgramsContent;