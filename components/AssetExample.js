import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/Logo')} />
      <Text style={styles.paragraph}>
       
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    
  },
  logo: {
    height: 250,
    width: 135,
    marginLeft:100
  }
});
