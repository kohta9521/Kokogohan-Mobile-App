import React from 'react';
import { View, Text, Button } from 'react-native';

// css
import styles from './styles';
import Logo from '../../components/atoms/Logo';


const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text style={styles.mainText}>ここごはんへようこそ！</Text>
      <Logo />
    </View>
  )
}

export default HomeScreen;