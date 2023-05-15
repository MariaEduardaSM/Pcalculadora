import React from 'react';
import { View,Text,TouchableHighlight,TextInput, StyleSheet,ColorPropType } from 'react-native';

export default props=>{
    return(
    <View styles={estilos.display}>
        <Text
        style={estilos.textoDisplayCal}
        numberOflines={1}
    >{props.valor}
    </Text>
    <Text
        style={estilos.textoDisplayRes}
        numberOflines={1}
        >{props.res}
    </Text>

    </View>
    )

}

const estilos = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#444',
        width:'100%'
    },
    textoDisplayRes:{
        fontsize:50,
        color:'#fff'

    
    },

    textoDisplayCal:{
        fontsize:25,
        color:'#fff'

    
    },
    
    

})