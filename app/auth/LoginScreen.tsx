import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

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
  image: {
    width: 200,
    height: 100,
  },
});
