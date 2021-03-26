import React from 'react';
import {Text, View} from 'react-native';
import MyButton from "../../MyButton";

const Modes = (props: ModesProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{}}>Методы чистки зубов обеспечивают
                последовательное более или менее
                тщательное очищение всех поверхностей зубов. Предполагается сочетание
                определённых видов движений щетки на той или иной поверхности, что связано с
                особенностями доступа к поверхности, её
                рельефом, соседством с другими
                тканями и др. Эти движения требуют
                соответствующего уровня координации,
                поэтому способы чистки зубов
                рассчитаны на определённые категории
                пациентов.

                Рекомендованы:
                взрослым - стандартный метод,
                школьником - метод Марталлера,
                дошкольникам - метод kai.</Text>
            <View style={{display: "flex", width: "100%"}}>
                <View style={{width: '100%', marginTop: 15}}>
                    <MyButton text={'СТАНДАРТНЫЙ МЕТОД'} fullWidth={true} onPress={() => {props.navigation.navigate('standard')}} />
                </View>
                <View style={{width: '100%', marginTop: 15}}>
                    <MyButton text={'МЕТОД МАРТАЛЛЕРА'} fullWidth={true} onPress={() => {props.navigation.navigate('martaller')}} />
                </View>
                <View style={{width: '100%', marginTop: 15}}>
                    <MyButton text={'МЕТОД KAI'} fullWidth={true} onPress={() => {props.navigation.navigate('kai')}} />
                </View>
            </View>
        </View>
    );
}


interface ModesProps {
    navigation: any
}

export default Modes;