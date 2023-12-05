import React from 'react';
import { View, Text, Button } from 'react-native';

// css
import styles from './styles';


const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text style={styles.mainText}>ここごはんへようこそ！</Text>
    </View>
  )
}

export default HomeScreen;