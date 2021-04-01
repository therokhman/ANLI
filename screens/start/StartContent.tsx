import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from "react-native";
import { ProgressBar, Colors } from 'react-native-paper';
import {StartInterface} from "./StartInterface";


const RadioButton = ( props: StartProps ) => {
    return (
        <View style={styles.radioButtonContainer}>
            <TouchableOpacity onPress={props.onPress} style={styles.radioButton}>
                {props.selected ? <View style={styles.radioButtonIcon} /> : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.radioButtonText}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    );
};

const StartContent = ({route}: any) => {
    const params: StartInterface = route.params;
    const teeth = {
        uri: Image.resolveAssetSource(params.uri).uri,
        width: 225,
        heigth: 225
    }
    const [isLiked, setIsLiked] = useState([
        { id: 1, value: true, name: "Чистка верхней челюсти", selected: false },
        { id: 2, value: false, name: "Чистка нижней челюсти", selected: false }
    ]);
    const onRadioBtnClick = (item: any) => {
        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
                ? { ...isLikedItem, selected: true }
                : { ...isLikedItem, selected: false }
        );
        setIsLiked(updatedState);
    };
    return (
        <><View style={styles.app}>
            {isLiked.map((item) => (
                <RadioButton
                    onPress={() => onRadioBtnClick(item)}
                    selected={item.selected}
                    key={item.id}
                >
                    {item.name}
                </RadioButton>
            ))}
        </View>
            <Image source={teeth} style={{height: 300, marginTop: 20, marginBottom: 20, marginLeft: 'auto', marginRight: 'auto'}} />
            <ProgressBar progress={0.5} color={Colors.red800} style={{justifyContent: 'space-between', width: 'auto'}}/>
            <View style={{justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 30}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{params.header}</Text>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 10,
                    marginTop: 5,
                    backgroundColor: '#dbebe8'
                }}>{params.text}</Text>
            </View></>
    );
}

const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        maxWidth: 500,
        justifyContent: 'space-between',
        marginLeft: 80,
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16
    },
});

interface StartProps {
    onPress: any,
    selected: any,
    children: any
}

export default StartContent;