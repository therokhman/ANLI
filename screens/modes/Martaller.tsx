import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Martaller = (props: MartallerProps) => {
    return(
        <ScrollView style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={{textAlign: 'center'}}>Метод инструктирования школьников, разработанный T.Martaler (Швейцария), представляет собой упрощенный вариант стандартного метода, адаптирован к психофизическим возможностям школьников. Порядок очищения: жевательная, вестибулярная(наружная), оральная (внутренняя) поверхность.</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Жевательная</Text>
            <Text style={{textAlign: 'center'}}>10 коротких энергичных горизонтальных движений. (10 сек)</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Вестибулярная (наружная)</Text>
            <Text style={{textAlign: 'center'}}>очищают при сомкнутых зубах, 10 вертикальных движений, захватывая одновременно зубы верхней и нижней челюсти. (10 сек)</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Оральная(внутренняя)</Text>
            <Text style={{textAlign: 'center'}}>10 движений вверх-вниз с равным усилием. (10 сек)</Text>
        </ScrollView>
    )
}


interface MartallerProps {
    navigation: any
}

export default Martaller;