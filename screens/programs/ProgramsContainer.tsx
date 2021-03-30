import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Programs from "./Programs"
import ProgramsContent from "./ProgramsContent";
import {ProgramsInterface} from "./ProgramsInterface";

const ProgramsContainer = () => {
    return(
        <Stack.Navigator initialRouteName="programs">
            <Stack.Screen name="programs" component={Programs} options={{ title: 'Специальные программы', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="teethwhite" component={ProgramsContent} initialParams = {data.teeth} options={{ title: 'Отбеливание зубов', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="gumprotect" component={ProgramsContent} initialParams = {data.gum} options={{ title: 'Защита десен', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="braces" component={ProgramsContent} initialParams = {data.braces} options={{ title: 'Уход за брекет-системой', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
            <Stack.Screen name="fresh" component={ProgramsContent} initialParams = {data.fresh} options={{ title: 'Свежесть дыхания', headerBackTitleVisible: false, headerStyle: {backgroundColor: '#83aba4'} }} />
        </Stack.Navigator>
    )
}

const Stack = createStackNavigator();

const data: {[key: string]: ProgramsInterface} = {
    teeth: {
        text: 'Для ослепительной улыбки, порой, обычной чистки может быть недостаточно, поэтому для достижения желаемого отбеливающего эффекта выполняйте следующий рекомендации: используйте отбеливающие пасты с гидратированным диоксидом кремния и/или карбонатом кальция в составе.\n' +
            ' Курильщикам и кофеманам лучше обратить внимание на формулы, содержащие компоненты папаин и поливинилпирролидон против зубного камня. Они помогут избавиться от стойкого желтого налета.',
        uri: require('../../assets/teeth.png')
    },
    gum: {
        text: 'Часто ли Вы замечали кровь во время чистки зубов? Кровоточивость дёсен может являться признаком различных заболеваний. Для предотвращения кровоточивости следует использовать более мягкую зубную щетку, гели, ополаскиватели и пасты с эффектом защиты дёсен.',
        uri: require('../../assets/gum.png')
    },
    braces: {
        text: 'При наличии на зубах брекетов необходимы дополнительные средства гигиены: ортодонтическая зубная щетка; суперфлосс (специальная зубная нить для пациентов с брекет-системой); щетка со специальными ершиками и набор ершиков к ней. Ершики необходимо регулярно (не менее чем 1 раз в неделю) заменять, т.к. они быстро изнашиваются. Желательно однопучковая зубная щетка. При назначении врача наносить кальцийсодержащий гель.',
        uri: require('../../assets/braces.png')
    },
    fresh: {
        text: 'Неприятный запах изо рта (галитоз) зачастую вызывают бактерии, которые находятся на спинке языка. Во избежание неприятного запаха следует очищать поверхность языка во время чистки зубов щёткой. Также рекомендуется использование ополаскивателей*.\n' +
            '\n' +
            '*При отсутствии улучшений проконсультируйтесь с врачом-стоматологом, поскольку хронический неприятный запах изо рта может свидетельствовать о более серьёзных проблемах.',
        uri: require('../../assets/fresh.png')
    }
}

export default ProgramsContainer;