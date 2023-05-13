import React, { Component } from 'react'
import {add} from './Calc';
import { View, Text, StyleSheet, Button, Alert, TextInput } from 'react-native'

class App extends Component{
   constructor(props) {
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
    };

    this.onChangeNumber1 = this.onChangeNumber1.bind(this);
    this.onChangeNumber2 = this.onChangeNumber2.bind(this);
  }

  onChangeNumber1(number1) {
    this.setState({ number1 });
  }

  onChangeNumber2(number2) {
    this.setState({ number2 });
  }


 
showAddition = () => {
    num1 = parseInt(this.state.number1);
    num2 = parseInt(this.state.number2);
    const sum = add(num1, num2);
    const result = sum % 2 == 0;


    if(result){
        Alert.alert(
      'The Result is Even',
      sum.toString(),
      [
        {
          text: 'ok',
          onPress: () => console.log('OK'),
        }
      ]
    )
      
    }else{

        Alert.alert(
      'The Result Odd',
      sum.toString(),
      [
        {
          text: 'ok',
          onPress: () => console.log('OK'),
        }
      ]
    )
    }

  
  }
  render(){
    const { number } = this.state;
    
    return(
      <View style={styles.container}>
        <Text>Let's try to add two numbers and </Text>
         <Text> see if the result is even or odd </Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeNumber1}
          value={number}
          placeholder="Enter first number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeNumber2}
          value={number}
          placeholder="Enter second number"
          keyboardType="numeric"
        />
        
        <View style={{marginBottom : 10}}></View>
        <Button title="Result" onPress={this.showAddition}/>  
             <View style={{marginBottom : 10}}></View>
           
             
              
      </View>
    )
  }
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 10,
    width: "60%",
    borderRadius: 5,
  },
  container: {
    backgroundColor: "#FFBF00",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default App;