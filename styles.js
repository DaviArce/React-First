import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class App extends Component{

  // constructor (props){
  //   super(props);
  //   this.state ={ Criando states
  //     nome:'Davi'
  //   }
  //   this.entrar = this.entrar.bind(this);//acessa ao this states e ao projeto
  // }
  // entrar(nome){
    //criando funcao
  //   this.setState({
  //     nome:nome
  //   })
  // }
  render(){

    return(
      <View style ={styles.container}>
        <Text style={[styles.red,styles.alinhaTexto]}>Texto1</Text>
        <Text style={[styles.orange,styles.alinhaTexto]}>Texto2</Text>
        <Text style={[styles.yellow,styles.alinhaTexto]}>Texto3</Text>
        <Text style={[styles.green,styles.alinhaTexto]}>Texto4</Text>
        <Text style={[styles.blue,styles.alinhaTexto]}>Texto5</Text>
        <Text style={[styles.indigo,styles.alinhaTexto]}>Texto6</Text>
        <Text style={[styles.violet,styles.alinhaTexto]}>Texto7</Text>
        {/* <Button title="Entrar" onPress={()=>this.entrar('Buceta')}></Button>
        <Text style={{fontSize:23,color:'red', textAlign:'center',marginTop:20}}>
          {this.state.nome}
          </Text> */}

        {/* <Jobs largura={300} altura={200} fulano="Davi foda" /> */}
      {/* Props são valores imutaveis
          state não */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    marginTop:80
  },
  red:{
    color:'red',
    fontSize:70
  },
  orange:{
    color:'orange',
  fontSize:60
  },
  yellow:{
    color:'yellow',
    fontSize:50
  },
  green:{
    color:'green',
    fontSize:40
  },
  blue:{
    color:'blue',
    fontSize:30
  },
  indigo:{
    color:'indigo',
    fontSize:20
  },
  violet:{
    color:'violet',
    fontSize:10
  },
  alinhaTexto:{
    textAlign:'center'
  }


})
//export default App;

// class Jobs extends Component{
//   render(){

//     let img = 'https://sujeitoprogramador.com/steve.png';

//     return(
//       <View>
//         <Image
//           source={{ uri: img }}
//           style={{ width: this.props.largura, height: this.props.altura,marginLeft:30 }}
//       />
//       <Text style={{marginLeft:27}}> {this.props.fulano} </Text>
//      </View>
//     );
//   }
// }