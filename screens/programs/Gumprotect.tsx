import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

const Gumprotect = (props: GumprotectProps) => {
    return(
        <ScrollView style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={{textAlign: 'center'}}>Метод обучения дошкольников. Порядок очищения: жевательная, вестибулярная(наружная), оральная(внутренняя) поверхность.</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Жевательная</Text>
            <Text style={{textAlign: 'center'}}>короткие горизонтальные поступательные движения  (5 сек)</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Вестибулярная (наружная)</Text>
            <Text style={{textAlign: 'center'}}>круговые движения при сомкнутых зубах, захватывая зубы верхней и нижней челюсти (5 сек)</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Оральная (внутренняя)</Text>
            <Text style={{textAlign: 'center'}}>очищают подметающими вертикальными движениями от десневого края к жевательной поверхности (5 сек)</Text>
        </ScrollView>
    )
}


interface GumprotectProps {
    navigation: any
}

export default Gumprotect;