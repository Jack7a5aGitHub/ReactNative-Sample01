import React , {Component} from 'react';
import { AppRegistry, Image, Text, View} from 'react-native';


class Greeting extends Component {
 render() {
    return (
     <Text>Hello {this.props.name}</Text>
    )
 }
}

export default class LotsOfGreetings extends Component {
    render(){
    let pic = { uri: "https://cdn.pixabay.com/photo/2017/10/23/05/56/holiday-2880261__340.jpg"
        };
    return (
        <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{width: 193, height:110}}/> 
        <Greeting name="Jack"/>
        <Greeting name="Josh"/>
        <Greeting name="Tina"/>
        </View>
    );
    }
}

