import React from 'react';
import { View, Text, Button } from 'react-native';


const MypageScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>マイページ</Text>
      {/* <Button title='マップ' onPress={() => navigation.navigate('マップ')} /> */}
    </View>
  )
}

export default MypageScreen;