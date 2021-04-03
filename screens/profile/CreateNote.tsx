import React, {Component} from "react";
import {View, Alert, Platform} from "react-native";
import MyButton from "../../MyButton";
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker'
import {inject, observer} from "mobx-react";

@inject('rootStore')
@observer
class CreateNote extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            blood: false,
            sensitivity: false,
            caries: false,
            pigmentation: false,
            tartar: false,
            date: new Date(),
            mode: 'date',
            show: true
        };
    }

    onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || this.state.date;
        this.setState({
            show: Platform.OS === 'ios',
            date: currentDate
        });

    };

    safeNote = () => {
       this.props.rootStore.addNote({
           date: this.state.date.toISOString(),
           blood: this.state.blood,
           sensitivity: this.state.sensitivity,
           caries: this.state.caries,
           pigmentation: this.state.pigmentation,
           tartar: this.state.tartar,
       });
       console.log('note saved');
       this.props.navigation.navigate('notes');
    }

    render() {
        return(<View style={{justifyContent: 'center', marginTop: 10}}>
                <DateTimePicker
                    style={{height: 180}}
                    testID="dateTimePicker"
                    value={this.state.date}
                    mode={this.state.mode}
                    maximumDate={new Date()}
                    is24Hour={true}
                    display="spinner"
                    onChange={this.onChange}
                />
                <CheckBox
                    title='Кровотечение'
                    checked={this.state.blood}
                    onPress={() => this.setState({blood: !this.state.blood})}
                />
                <CheckBox
                    title='Повышенная чувствительность'
                    checked={this.state.sensitivity}
                    onPress={() => this.setState({sensitivity: !this.state.sensitivity})}
                />
                <CheckBox
                    title='Кариес'
                    checked={this.state.caries}
                    onPress={() => this.setState({caries: !this.state.caries})}
                />
                <CheckBox
                    title='Пигментация'
                    checked={this.state.pigmentation}
                    onPress={() => this.setState({pigmentation: !this.state.pigmentation})}
                />
                <CheckBox
                    title='Зубной камень'
                    checked={this.state.tartar}
                    onPress={() => this.setState({tartar: !this.state.tartar})}
                />
                <View style={{width: '90%', marginLeft: 20, alignItems: 'stretch', justifyContent: 'space-between', marginTop: 35 }}>
                    <MyButton text={'Добавить заметку'} onPress={() => {this.safeNote()}} />
                </View>
            </View>
        )
    }
}

export default CreateNote;
