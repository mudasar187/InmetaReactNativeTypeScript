import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={loginStyles.container}>
      <Image
        style={loginStyles.image}
        source={require('../../static/welcome.png')}
      />
    </View>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 100,
  },
});
