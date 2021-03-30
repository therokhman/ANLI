import React from 'react';
import {Text, View} from 'react-native';
import MyButton from "../../MyButton";

const Modes = (props: ModesProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{textAlign: 'center'}}>Методы чистки зубов обеспечивают последовательное более или менее
                тщательное очищение всех поверхностей зубов. Предполагается сочетание
                определённых видов движений щетки на той или иной поверхности, что связано с
                особенностями доступа к поверхности, её рельефом, соседством с другими тканями и др. Эти движения требуют
                соответствующего уровня координации, поэтому способы чистки зубов рассчитаны на определённые категории пациентов. </Text>
            <Text style={{textAlign: 'center', marginTop: 10}}>Рекомендованы:</Text>
            <Text style={{textAlign: 'center'}}>взрослым - стандартный метод,</Text>
            <Text style={{textAlign: 'center'}}>школьником - метод Марталлера,</Text>
            <Text style={{textAlign: 'center'}}>дошкольникам - метод kai.</Text>
            <View style={{display: "flex", width: "100%"}}>
                <View style={{width: '100%', marginTop: 15, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                    <MyButton text={'СТАНДАРТНЫЙ МЕТОД'} fullWidth={true} onPress={() => {props.navigation.navigate('standard')}} />
                </View>
                <View style={{width: '100%', marginTop: 15, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                    <MyButton text={'МЕТОД МАРТАЛЛЕРА'} fullWidth={true} onPress={() => {props.navigation.navigate('martaller')}} />
                </View>
                <View style={{width: '100%', marginTop: 15, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
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