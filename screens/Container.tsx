import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, StyleSheet} from "react-native";

const Container: React.FC = ({children}) => {
    return (<LinearGradient colors={['#f0faf8', '#97cac0']}
                            style={styles.gradient}>
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    </LinearGradient>);
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: 15,
    }
})

export default Container
