import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export class Tabs extends Component {

    state = {
        selected: 0,
        icons: [
            'home',
            'group',
            'shopping-cart',
            'heart',
            'bell',
            'bars'
        ]
    }

    mudaAba(nAba) {
        this.setState({ selected: nAba })
    }

    render() {
        const { selected, icons } = this.state;
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, justifyContent: 'space-between', borderBottomColor:'#ababab', }}>
                {icons.map((nome, index) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => this.mudaAba(index)}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: 36, borderBottomWidth: selected == index ? 3 : 0, flex: 1, paddingBottom: 10, borderBottomColor: '#4267B2', paddingLeft: index == 0 ?  5 : 0, paddingRight: index == 5 ?  5 : 0 }}>
                                <Icon name={nome} size={28} color={selected == index ? '#4267B2' : '#b5b1b1'} />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </View>
        )
    }

}