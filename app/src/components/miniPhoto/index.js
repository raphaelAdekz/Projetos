import React from 'react'
import { View, Image } from 'react-native';


export const MiniPhoto = (props) => {

    return (
            <View style={{width:40, height:40, borderColor:'#ababab', borderRadius:100, borderWidth:0.8, alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
                <Image source={require(`../../assets/images/perfil.jpg`)} resizeMode='contain' flex={1} width={null} height={null} />
            </View>
    )

}