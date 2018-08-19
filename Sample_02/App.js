import React, { Component } from 'react';
import {  Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowText: true};

        //Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
            return {isShowText: !previousState.isShowText};
        });
        }, 1000);
    }
    render() {
        let display = this.state.isShowText ? this.props.Text : '';
        return (
            <Text>{display}</Text>
            );
    }
}

export default class App extends Component {
    render() {
        return (
            <View>
                <Blink Text="I love to blink"/>
                <Blink Text="Jack"/>
                <Blink Text="Josh"/>
            </View>
            );
    }
}