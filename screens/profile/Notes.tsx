import React from "react";
import {TextInput, StyleSheet, Alert, View} from "react-native";
import MyButton from "../../MyButton";


const Notes = () => {
    const [text, onChangeText] = React.useState("");

    return (
            <><TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={'Введите заметку'}
                value={text}
            />
                <View style={{width: '90%', marginLeft: 20, display: "flex", alignItems: 'stretch', justifyContent: 'space-between' }}>
                    <MyButton text={'Добавить заметку'} onPress={() => {SafeNote()}} />
                </View></>
    );
};

const SafeNote = () => {
    Alert.alert('Заметка создана')
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

export default Notes;