import React from "react";
import {View} from "react-native";
import MyButton from "../../MyButton";


const Notes = (props: any) => {
    return (
        <View style={{width: '90%', marginLeft: 20, display: "flex", alignItems: 'stretch', justifyContent: 'space-between' }}>
            <MyButton text={'Добавить заметку'} onPress={() => {props.navigation.navigate('createnote')}} />
        </View>
    );
};



export default Notes;
