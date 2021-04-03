import React from 'react';
import {Text, View} from "react-native";
import {inject, observer} from "mobx-react";

const Notifications = inject('rootStore')(observer((props: any) => {
    return (
        <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
            <View style={{
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 10,
                marginTop: 50,
                backgroundColor: '#dbebe8',
                padding:5,
                position: 'relative'
            }}>
                <View style={{
                    position: "absolute",
                    left: -10,
                    top: -10,
                    backgroundColor: 'red',
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    borderStyle: 'solid',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                        {props.rootStore.messages.length}
                    </Text>
                </View>
                <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                    Новое уведомление
                </Text>
                <Text style={{marginTop: 10, textAlign: 'center', fontStyle: 'italic'}}>
                    Рекомендовано менять зубную щетку раз в 3 месяца
                </Text>
            </View>
        </View>
    );
}));

export default Notifications;
