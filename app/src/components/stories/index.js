import React, { Component } from 'react'
import { View, Text, FlatList, ImageBackground } from 'react-native';

import {MiniPhoto} from '../';


export class Stories extends Component {


    _renderItem(item, index){
        return(
            <ImageBackground style={{width:115, height:200, backgroundColor:'red', padding:5, flex:1, marginLeft: index == 0 ? 12 : 5, alignItems:'flex-start', justifyContent:'space-between', marginVertical:20, borderRadius:10, overflow:'hidden'}}
            source={require('../../assets/images/perfil.jpg')}>
                {index != 0 ? 
                <MiniPhoto/>
                :
                <View style={{width:40, height:40, borderColor:'white', borderRadius:100, borderWidth:0.8, alignItems:'center', justifyContent:'center', overflow:'hidden', backgroundColor:'white'}}>
                    <Text style={{fontSize:32, color: '#4267B2'}}>+</Text>
                    </View>
                }
                {index != 0 ?
                <Text style={{color:'white', fontSize:12}}>Nome</Text>
                :
                <Text style={{color:'white', fontSize:12}}>Adicionar ao story</Text>
                }
            </ImageBackground>
        )
    }

    _renderFooter(){
        return(
            <View style={{width:10}}/>
        )
    }


    render() {
        return (
            <FlatList
            data={[1,1,1,1,1,1,1,1,1,1]}
            renderItem={({item, index}) => this._renderItem(item, index)}
            ListFooterComponent={()=> this._renderFooter()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
        )
    }

}