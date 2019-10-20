import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {Header, Tabs} from '../'

export const Content = (props) => {  
    let {header, tabs} = props;
    return (
        <View>
            {header && <Header/>}
            {tabs && <Tabs/>}
        </View>
    )
}