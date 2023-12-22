import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => {
    // loading
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        // ローディング中の表示
        return (
          <View style={styles.container}>
            <Image
              style={{width: 300, height: 70}}
              source={require('../../../assets/logo.png')}
            />
            {/* あってもなくても */}
            <ActivityIndicator size="small" color="white" style={{marginTop: 10}} />
          </View>
        );
      }
    
      // ロードが終了した後の表示
      return (
          <View>
          </View>
      );
    };


    
const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0211',
        alignItems: 'center',
        justifyContent: 'center',
      }
})

export default HomeScreen;