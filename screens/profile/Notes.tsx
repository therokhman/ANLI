import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import MyButton from "../../MyButton";
import {inject, observer} from "mobx-react";


@inject('rootStore')
@observer
class Notes extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{
                height: '100%',
            }}
            contentContainerStyle={{
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: "flex",
                alignItems: 'stretch',
                justifyContent: 'space-between'
            }}
            >
                <View style={{marginTop: 10}}>
                    <MyButton text={'Добавить заметку'} onPress={() => {
                        this.props.navigation.navigate('createnote')
                    }}/>
                </View>


                {
                    this.props.rootStore.notes.slice().sort((a: any, b: any) => {
                        if (a.stamp > b.stamp) return -1;
                        if (a.stamp < b.stamp) return 1;
                        return 0;
                    })
                        .map((el: any) =>
                            <View key={el.stamp} style={{
                                borderColor: 'black',
                                borderWidth: 2,
                                borderRadius: 10,
                                marginTop: 30,
                                backgroundColor: '#dbebe8',
                                padding:5
                            }}>
                                <Text>
                                    Дата: {el.date.substring(0, 10)}
                                </Text>
                                <Text>
                                    Кровотечение: {el.blood ? 'Да' : 'Нет'}
                                </Text>
                                <Text>
                                    Повышенная чувствительность: {el.sensitivity ? 'Да' : 'Нет'}
                                </Text>
                                <Text>
                                    Кариес: {el.caries ? 'Да' : 'Нет'}
                                </Text>
                                <Text>
                                    Пигментация: {el.pigmentation ? 'Да' : 'Нет'}
                                </Text>
                                <Text>
                                    Зубной камень: {el.tartar ? 'Да' : 'Нет'}
                                </Text>
                            </View>
                        )
                }
            </ScrollView>
        );
    }
}


export default Notes;
