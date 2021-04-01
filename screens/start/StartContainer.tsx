import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Start from "./Start"
import StartContent from "./StartContent";
import {StartInterface} from "./StartInterface";

const StartContainer = () => {
    return(
        <Stack.Navigator initialRouteName="start">
            <Stack.Screen name="start" component={Start} options={{ title: 'Режимы', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="algorithm1" component={StartContent} initialParams = {data.algorithm1} options={{ title: 'Алгоритм 1', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="algorithm2" component={StartContent} initialParams = {data.algorithm2} options={{ title: 'Алгоритм 2', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="algorithm3" component={StartContent} initialParams = {data.algorithm3} options={{ title: 'Алгоритм 3', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
        </Stack.Navigator>
    )
}

const Stack = createStackNavigator();

const data: {[key: string]: StartInterface} = {
    algorithm1: {
        uri: require('../../assets/jaw1.png'),
        header: 'Вестибулярная (наружная) поверхность',
        text: '1) вертикальные: подметающие движения от десны к жевательной поверхности по 12 сек на каждую челюсть <24 сек>\n' +
            '2) горизонтальные: возвратно-поступательные движения 8 сек на каждую челюсть <16 сек>\n' +
            '3) круговые: циркулярные движения, не повреждая десневой край, по 5 сек на каждую челюсть <10 сек>',
    },
    algorithm2: {
        uri: require('../../assets/jaw2.png'),
        header: 'Оральная (внутренняя) поверхность',
        text: '1) вертикальные: подметающие движения от десны к жевательной поверхности  по 12 сек на каждую челюсть <24 сек>\n' +
            '2) горизонтальные: возвратно-поступательные движения по 8 сек на каждую челюсть <16 сек>\n' +
            '3) круговые: циркулярные движения, не повреждая десневой край, по 5 сек на каждую челюсть <10 сек>\n',
    },
    algorithm3: {
        uri: require('../../assets/jaw3.png'),
        header: 'Жевательная поверхность',
        text: '1) горизонтальные: щетку ставят на жевательную поверхность, 4 возвратно-поступательных движения. <4 сек>\n' +
            '2) круговые: 5 циркулярных движений <5 сек>',
    }
}

export default StartContainer;