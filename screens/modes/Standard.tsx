import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Standard = (props: StandardProps) => {
    return(
        <ScrollView style={{paddingLeft: 20, paddingRight: 20}}>
            <Text style={{textAlign: 'center'}}>Признан наиболее эффективным.
                Правила чистки: справа налево на верхней и на нижней челюсти поочередно чистят вестибулярные (наружные), оральные (внутренние), жевательные поверхности каждого сегмента.</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Вестибулярная (наружная) поверхность</Text>
            <Text style={{textAlign: 'center'}}>· вертикальные "подметающие", горизонтальные, круговые движения.
                · вертикальные: подметающие движения от десны к жевательной поверхности 4 раза
                (4 сек)
                · горизонтальные: возвратно-поступательные движения 4 раза. (4 сек)
                · круговые: циркулярные движения, не повреждая десневой край. (4 сек)</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Оральная (внутренняя) поверхность</Text>
            <Text style={{textAlign: 'center'}}>· вертикальные: подметающие движения от десны к жевательной поверхности 5 раз. (5 сек)
                · горизонтальные: возвратно-поступательные движения 5 раз. (5 сек)
                · круговые: циркулярные движения, не повреждая десневой край. (5 сек)</Text>
            <Text style={{textAlign: 'center', fontWeight: 900}}>Жевательная поверхность</Text>
            <Text style={{textAlign: 'center'}}>· горизонтальные: щетку ставят на жевательную поверхность, 4 возвратно-поступательных движения. (4 сек)
                · круговые: 5 циркулярных движений (5 сек)</Text>
        </ScrollView>
    )
};


interface StandardProps {
    navigation: any
}

export default Standard;