import React from 'react';
import {Text,TouchableHighlight,StyleSheet,Dimensions} from 'react-native';

export default props=>{

    const estilosBotoes=[estilos.btn]


    if(props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if(props.calculo){
        estilosBotoes.push(estilos.btnCalc)
    }
    if(props.ac){
        estilosBotoes.push(estilos.btnAC)
    }

    if(props.bs){
        estilosBotoes.push(estilos.btnBS)
    }



    return(
        <TouchableHighlight
            onPress={props.aoClicar}
            >
                <Text style={estilosBotoes}>{props.label} </Text>

        </TouchableHighlight>
        
   
    )

}

const estilos = StyleSheet.create({
    btn:{
        fontSize:30,
        height: Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        padding:22,
        backgroundColor:'#fff',
        color:'#777',
        borderWidth:1,
        borderColor:'#777',
        textAlign:"center",

   
    },

    btnCalc:{
        color:'#0f0',
    },
    btnIgual:{
        color:'#f00',
    
    },
    btnAC:{
        color:'#f00',

    },

    btnBS:{
        color:'#0ff',
    },

   

    

})