import React from 'react';
import {StyleSheet, TouchableOpacity, Text, GestureResponderEvent, StyleProp} from 'react-native';

const MyButton = (props: MyButtonProps) => {
    return (
        <TouchableOpacity
            style={getStyles(props.paddingX, props.paddingY, props.fullWidth).button}
            onPress={props.onPress}
        >
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

interface MyButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    paddingX?: number;
    paddingY?: number;
    fullWidth?: boolean;
}

function getStyles(paddingX: number = 8, paddingY:number = 8, fullWidth: boolean = false):StyleProp<any> {
    let button: any = {
        backgroundColor: 'rgb(33, 150, 243)',
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    if (fullWidth) {
        button.width = '100%';
    }
    return StyleSheet.create({
        button,
    });
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        textAlign: 'center'
    }
});

export default MyButton;