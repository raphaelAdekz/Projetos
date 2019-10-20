import React, { Component } from 'react'
import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {MiniPhoto} from '../';


export class Posts extends Component {


    _renderItem(item, index){
        return(
           <View style={{flex:1,marginVertical:10, paddingHorizontal:10, borderBottomWidth:12, paddingBottom:10, borderBottomColor:'#e6e3e3' }}>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', }}>
                  <View style={{flexDirection:'row',}}>
                  <MiniPhoto/>
                  <View style={{marginLeft:10,}}>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', }}>

                      <Text style={{fontWeight:'bold', fontSize:15}}>Nome pagina</Text>
                      <Icon name='ellipsis-h' size={18} color={'#b5b1b1'} style={{marginLeft:Dimensions.get('screen').width - 170}}/>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center', marginTop:3}}>
                      <Text style={{color:'#b5b1b1'}}>10 min</Text>
                      <Icon name='globe' size={14} color={'#b5b1b1'} style={{marginLeft:5}}/>
                      </View>
                  </View>
                  </View>
                 

              </View>

                  <Text style={{marginTop:15}}>Descrição do post</Text>
                  <View style={{flex:1, marginTop:10, alignItems:'center', justifyContent:'center'}}>

                <Image source={require(`../../assets/images/perfil.jpg`)} resizeMode='contain' flex={1} width={null} height={null} />
                  </View>

                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:12, borderBottomWidth:0.8, borderBottomColor:'#b5b1b1', paddingBottom:10}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name='thumbs-up' size={18} color= {'#4267B2'} style={{marginLeft:5}}/>
                    <Icon name='heart' size={18} color={'red'} style={{marginLeft:5}}/>
                    <Text style={{marginLeft:5}}>100</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text>20 comentários</Text>
                        <Text> . </Text>
                        <Text>2 compartilhamentos</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, marginTop:10}}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>

                  <Icon name='thumbs-up' size={22} color= {'#b5b1b1'} style={{marginLeft:5}}/>
                  <Text style={{marginLeft:5}}>Curtir</Text>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center'}}>

                  <Icon name='comment' size={22} color= {'#b5b1b1'} style={{marginLeft:5}}/>
                  <Text style={{marginLeft:5}}>Comentar</Text>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center'}}>

                  <Icon name='share' size={22} color= {'#b5b1b1'} style={{marginLeft:5}}/>
                  <Text style={{marginLeft:5}}>Compartilhar</Text>
                      </View>
                    
                  </View>
                  
            
           </View>
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
            showsVerticalScrollIndicator={false}
            />
        )
    }

}