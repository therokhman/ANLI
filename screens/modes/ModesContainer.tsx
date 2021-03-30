import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Modes from "./Modes"
import ModesContent from "./ModesContent";

const ModesContainer = () => {
    return(
        <Stack.Navigator initialRouteName="modes">
            <Stack.Screen name="modes" component={Modes} options={{ title: 'Режимы', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="standard" component={ModesContent} initialParams = {data.standard} options={{ title: 'Стандартный метод', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="martaller" component={ModesContent} initialParams = {data.martaller} options={{ title: 'Метод Марталера', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="kai" component={ModesContent} initialParams = {data.kai} options={{ title: 'Метод KAI', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
        </Stack.Navigator>
    )
}

const Stack = createStackNavigator();

const data: {[key: string]: ModesInterface} = {
    standard: {
        header: 'Признан наиболее эффективным. ' +
            'Правила чистки: справа налево на верхней и на нижней челюсти поочередно чистят вестибулярные (наружные), оральные (внутренние), жевательные поверхности каждого сегмента.',
        textBold1: 'Вестибулярная (наружная) поверхность',
        text1: '· вертикальные "подметающие", горизонтальные, круговые движения.\n' +
            '· вертикальные: подметающие движения от десны к жевательной поверхности 4 раза\n' +
            '(4 сек)\n' +
            '· горизонтальные: возвратно-поступательные движения 4 раза. (4 сек)\n' +
            '· круговые: циркулярные движения, не повреждая десневой край. (4 сек)',
        textBold2: 'Оральная (внутренняя) поверхность',
        text2: '· вертикальные: подметающие движения от десны к жевательной поверхности 5 раз. (5 сек)\n' +
            '· горизонтальные: возвратно-поступательные движения 5 раз. (5 сек)\n' +
            '· круговые: циркулярные движения, не повреждая десневой край. (5 сек)',
        textBold3: 'Жевательная поверхность',
        text3: '· горизонтальные: щетку ставят на жевательную поверхность, 4 возвратно-поступательных движения. (4 сек)\n' +
            '· круговые: 5 циркулярных движений (5 сек)'
    },
    martaller: {
        header: 'Метод инструктирования школьников, разработанный T.Martaler (Швейцария), представляет собой упрощенный вариант стандартного метода, адаптирован к психофизическим возможностям школьников. Порядок очищения: жевательная, вестибулярная(наружная), оральная (внутренняя) поверхность.',
        textBold1: 'Жевательная',
        text1: '10 коротких энергичных горизонтальных движений. (10 сек)',
        textBold2: 'Вестибулярная (наружная)',
        text2: 'очищают при сомкнутых зубах, 10 вертикальных движений, захватывая одновременно зубы верхней и нижней челюсти. (10 сек)',
        textBold3: 'Оральная(внутренняя)',
        text3: '10 движений вверх-вниз с равным усилием. (10 сек)'
    },
    kai: {
        header: 'Метод обучения дошкольников. Порядок очищения: жевательная, вестибулярная(наружная), оральная(внутренняя) поверхность.',
        textBold1: 'Жевательная',
        text1: 'короткие горизонтальные поступательные движения  (5 сек)',
        textBold2: 'Вестибулярная (наружная)',
        text2: 'круговые движения при сомкнутых зубах, захватывая зубы верхней и нижней челюсти (5 сек)',
        textBold3: 'Оральная (внутренняя)',
        text3: 'очищают подметающими вертикальными движениями от десневого края к жевательной поверхности (5 сек)'
    }
}

export default ModesContainer;