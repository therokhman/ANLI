import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';


const teeth = {
    uri: require('../../assets/teeth.png'),
    width: 300,
    heigth: 300
}
const Teethwhite = (props: TeethwhiteProps) => {
    return(
        <ScrollView style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={{textAlign: 'center'}}>Для ослепительной улыбки, порой, обычной чистки может быть недостаточно, поэтому для достижения желаемого отбеливающего эффекта выполняйте следующий рекомендации: используйте отбеливающие пасты с гидратированным диоксидом кремния и/или карбонатом кальция в составе.
                Курильщикам и кофеманам лучше обратить внимание на формулы, содержащие компоненты папаин и поливинилпирролидон против зубного камня. Они помогут избавиться от стойкого желтого налета.</Text>
            <Image source={teeth} style={{height: 300, marginTop: 50, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto'}} />
        </ScrollView>
    )
}


interface TeethwhiteProps {
    navigation: any
}

export default Teethwhite;