import React, {Component} from 'react';
import {View, Text,StyleSheet,TextInput,Button} from 'react-native';

class SHape extends Component{
    
    render(){
        return(
            
             <View style={syles.container} > 
                 <View style={{width:100,height:50,backgroundColor:'red'}}>
                 </View>
                 <View style={{width:50,height:50,backgroundColor:'green'}}></View>
                 <View style={{width:50,height:50,backgroundColor:'yellow'}}></View>
                     
             </View>
        )
    }
}
class App extends Component{
    constructor (props){
        super(props);
        this.state={
             nome:'',
             input:''
        };
        
        this.entrar = this.entrar.bind(this);

    }
    entrar(text){
        if(this.state.input===""){
            alert('Digite seu nome');
            return;
        }
        this.setState({nome:"Bem vindo "+this.state.input});
    }
    
      
        
        
    
    render(){
        
        return(
            <View style={syles.container}>
                <TextInput 
                style={syles.inputStyle}
                placeholder='Digite seu nome'
                underlineColorAndroid="transparent"
                onChangeText={(text)=> this.setState({input:text})}

                />
                <Button title='Entrar' onPress={this.entrar} />
                <Text style={syles.Texto}>{this.state.nome}</Text>

                
            </View>
        )
    }
}
const syles = StyleSheet.create ({
   container :{ 
       flex:1,

   },
   Texto:{
       textAlign:'center',
       fontSize:25,

   },

   inputStyle:{
    height:45,
    borderWidth:1,
    borderColor:'#222',
    margin:10,
    marginTop:30,
    fontSize:20,
    padding:10,

   },
   maluco:{
    flex:1,
    marginTop:25,
    flexDirection:'column',
    justifyContent:'center',//Quando esta no column ele determina o Y e quando row controla o X flex-start é  padrao 
    alignItems:'stretch',
   }
});

export default App;