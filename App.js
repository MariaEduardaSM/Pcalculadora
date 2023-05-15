import React,{useState}from 'react';
import { SafeAreaView,View,Text,TouchableHighlight,TextInput, StyleSheet, ViewBase } from 'react-native';
import Display from "./componentes/Display";
import Btn from "./componentes/botao";



export default function App(){

const [calculo,setCalculo]=useState(0)
const [resultado,setResultado]=useState(0)


const calcular=()=>{
  setResultado(eval(calculo))
}

  return(
  <SafeAreaView style={estilos.conteiner}>
    <Text>Calculadora</Text>
    <Display valor={0} res={0}/>
  
 <View style={estilos.botoes}>
  <Btn label="AC"  ac aoClicar={()=>{}}></Btn>
  <Btn label="(" aoClicar={()=>{}}></Btn>
  <Btn label=")" aoClicar={()=>{}}></Btn>
  <Btn label="/" calculo aoClicar={()=>{}}></Btn>
  <Btn label="7" aoClicar={()=>{}}></Btn>
  <Btn label="8" aoClicar={()=>{}}></Btn>
  <Btn label="9" aoClicar={()=>{}}></Btn>
  <Btn label="*" calculo aoClicar={()=>{}}></Btn>
  <Btn label="4" aoClicar={()=>{}}></Btn>
  <Btn label="5" aoClicar={()=>{}}></Btn>
  <Btn label="6" aoClicar={()=>{}}></Btn>
  <Btn label="-" calculo aoClicar={()=>{}}></Btn>
  <Btn label="1" aoClicar={()=>{}}></Btn>
  <Btn label="2" aoClicar={()=>{}}></Btn>
  <Btn label="3" aoClicar={()=>{}}></Btn>
  <Btn label="+" calculo aoClicar={()=>{}}></Btn>
  <Btn label="0" aoClicar={()=>{}}></Btn>
  <Btn label="." aoClicar={()=>{}}></Btn>
  <Btn label="<-" bs aoClicar={()=>{}}></Btn>
  <Btn label="=" igual aoClicar={()=>{}}></Btn>

 </View>
  </SafeAreaView>

  
  );
  
};

const estilos = StyleSheet.create({

conteiner:{
  flex:1,
  justifyContent:'flex-start',
  alignItems:'center',
},
  botoes:{
    flexDirection:"row",
    flwrap:"wrap"
  
  
},

});

