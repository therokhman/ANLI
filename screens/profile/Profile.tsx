import React from 'react';
import {View} from 'react-native';
import MyButton from "../../MyButton";

const Profile = (props: ProfileProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 80 }}>
            <View style={{width: '100%', borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                <MyButton fullWidth={true} text={'Журнал чистки зубов'} onPress={() => {props.navigation.navigate('journal')}} />
            </View>
            <View style={{width: '100%', marginTop: 10, borderColor: 'black', borderWidth: 2, borderRadius: 10}}>
                <MyButton fullWidth={true} text={'Заметки'} onPress={() => {props.navigation.navigate('notes')}} />
            </View>
        </View>
    );
}


interface ProfileProps {
    navigation: any
}

export default Profile;