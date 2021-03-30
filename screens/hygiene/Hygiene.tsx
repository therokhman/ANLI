import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import HygieneContent from "./HygieneContent";

const Hygiene = (props: HygieneProps) => {
    return (
        <Tab.Navigator initialRouteName={'tongue'} tabBarOptions={{
            activeTintColor: '#020a08',
            style: { backgroundColor: '#83aba4',
            },
            labelStyle: {
                fontWeight: '700',
                margin: 0,
                padding: 0,
            },
        }}>
            <Tab.Screen name={'tongue'} component={HygieneContent} options={{title: 'Язык'}} initialParams = {data.tongue} />
            <Tab.Screen name={'dentalFloss'} component={HygieneContent} options={{title: 'Зубная нить'}} initialParams = {data.dentalFloss} />
            <Tab.Screen name={'rinsing'} component={HygieneContent} options={{title: 'Полоскание'}} initialParams = {data.rinsing} />
        </Tab.Navigator>
    );
}

const Tab = createMaterialTopTabNavigator();

interface HygieneProps {
    navigation: any
}

const data: {[key: string]: HygieneInterface} = {
    tongue: {
        title: '1 раз в день',
        subtitle: 'Рекомендована ежедневная чистка',
        text: 'В большинстве случаев неприятный запах изо рта (галитоз) связан с ферментативной деятельностью анаэробных микроорганизмов, которые колонизирует спинку языка благодаря неровностям рельефа, которые являются "ловушками" для микробов и пищевых субстратов для них. Используйте пластиковые скребки для языка, имеющие форму лопатки. Проводят по поверхности языка, с легким давлением продвигают к кончику.'
    },
    dentalFloss: {
        title: '2 раза в день',
        subtitle: 'Рекомендовано пользоваться 2 раза в день \n ежедневно.',
        text: 'Для очищения контактных (боковых) поверхностей зубов используют зубные нити (флоссы), которые помогают разрушить мягкие зубные отложения и   вынести их из межзубного пространства. Нить вводят в межзубный промежуток, осторожно проталкивают через контактный пункт зубов, доводят до десны (“до щелчка”). Здесь нить С-образно изгибают по поверхности зуба, которую нужно очистить, и осторожно продвигают по направлению от десны.'
    },
    rinsing: {
        title: '2 раза в день',
        subtitle: 'Ежедневно пользуйтесь ополаскивателем 2 раза в день',
        text: 'Полоскание с использованием различных жидких средств применяют для разрыхления зубного налёта до чистки зубов, для удаления из полости рта освобождённых частиц налёта после чистки зубов, а также для создания в полости рта депо антисептика и фторида.'
    }
}

export default Hygiene;