import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    GestureResponderEvent,
    StyleProp,
    ImageSourcePropType,
    Image
} from 'react-native';

const JournalButton = (props: JournalButtonProps) => {
    console.log(props.image);
    const img = {
        uri: Image.resolveAssetSource(props.image).uri,
        width: 30,
        height: 30
    }

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress ? props.onPress : () => {}}
        >
            <Image source={img} style={{height: 30}} />
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

interface JournalButtonProps {
    text: string;
    image: string;
    onPress?: (event: GestureResponderEvent) => void;
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'rgb(33, 150, 243)',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default JournalButton;