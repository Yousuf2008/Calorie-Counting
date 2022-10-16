import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import db from './LocalDB.js';
import healthy from './AlternativeDB';

// You can import from local files
import AssetExample from './components/AssetExample';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      calorie: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}></Text>
        
          <AssetExample />
        
        <TextInput
          style={styles.inputBox}
          onChangeText={(foodItem) => {
            this.setState({ text: foodItem });
          }}
          value={this.state.text}
          placeholder='Type Food Items Here EX: LaysClassicPotatoChips'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ calorie: db[this.state.text] });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <Text
        style= {styles.result}>
          Calorie: {this.state.calorie}
        </Text>
         <Text
        style= {styles.result}>
          Alternative: {healthy[this.state.calorie]}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AC96DB',

    padding: 8,
  },
  inputBox: {
    width: '100%',
    height: 90,
    borderWidth: 3,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: '50%',
    height: 40,
    alignSelf: 'center',
    margin: 50,
    

  },
  buttonText: {
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    color:'white',
    fontFamily:'sans-serif-thin'

  },
  result: {
   textAlign: 'center',
   fontSize: 18,
   fontFamily: 'cursive',
   fontSize: 30,
   color:'white',
  },
});
