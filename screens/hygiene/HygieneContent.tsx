import React from 'react';
import {Text, View} from "react-native";

const HygieneContent = ({route}: any) => {
    const params: HygieneInterface | undefined = route.params;
    return (
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 70}}>
            <Text>
                <Text style={{fontWeight: 'bold'}}>Частота: </Text>
                {params?.title}
            </Text>
            <Text style={{textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 10, backgroundColor: '#dbebe8'}}>
                {params?.subtitle}
            </Text>
            <Text style={{textAlign: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 30, backgroundColor: '#dbebe8'}}>
                {params?.text}
            </Text>
        </View>
    );
}

export default HygieneContent;