import React from 'react';
import { View, Text, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='マップ' onPress={() => navigation.navigate('マップ')} />
    </View>
  )
}

export default HomeScreen;