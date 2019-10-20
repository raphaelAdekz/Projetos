import React from 'react'
import { View, Text, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const Header = (props) => {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, justifyContent: 'space-between' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Text style={{ color: '#4267B2', fontSize: 34, fontWeight: 'bold' }}>facebook</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ marginRight: 20, width: 38, height: 38, borderRadius: 100, backgroundColor: '#edebeb', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='search' size={22} color='#0a0a0a' />
                </View>
                <View style={{ width: 38, height: 38, borderRadius: 100, backgroundColor: '#edebeb', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='envelope' size={22} color='#0a0a0a' />
                </View>
            </View>
        </View>
    )

}