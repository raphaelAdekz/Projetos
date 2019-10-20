import React from 'react'
import { View, Text, TouchableWithoutFeedback, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {MiniPhoto} from '../'


export const NewPost = (props) => {

    return (
        <View>

        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, justifyContent: 'space-between', borderBottomWidth:0.8, borderTopWidth:0.8, borderColor:'#ababab', marginTop:-15 }}>
            <MiniPhoto/>
            <View style={{width:40, height:35, borderColor:'#ababab', borderRadius:100, borderWidth:0.8, flex:8, marginLeft:10, paddingLeft:20, alignItems:'center', flexDirection:'row'}}>
                <Text style={{fontSize:15}}>No que você está pensando?</Text>
            </View>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20, marginTop:15, borderBottomWidth:12, paddingBottom:10, borderBottomColor:'#e6e3e3'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', flex:1}}>
                <Icon name='camera' size={18} color='red' />
                <Text style={{marginLeft:5}}>Ao vivo</Text>
            </View>
            
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', borderLeftWidth:1,borderRightWidth:1, flex:1, borderColor:'#ababab'}}>
                <Icon name='photo' size={18} color='green' />
                <Text style={{marginLeft:5}}>Foto</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', flex:1}}>
                <Icon name='map-marker' size={18} color='pink' />
                <Text style={{marginLeft:5}}>Check-in</Text>
            </View>
        </View>

        </View>
    )

}