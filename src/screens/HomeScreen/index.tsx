import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// css
import Logo from '../../components/atoms/Logo';
import SectionTitle from '../../components/atoms/SectionTitle';
import GenreButton from '../../components/atoms/GenreButton';
import GenreScreen from '../../components/atoms/GenreButton';

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
        <ScrollView>
          <View>
            <SectionTitle id={1} title="タイムライン" />
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RestaurantDetails', { restaurantId: 1 })}
          >
            <View>
              <Text style={styles.buttonText}>レストラン詳細を見る</Text>
            </View>
          </TouchableOpacity>
          </View>
        </ScrollView>
      );
    };


    
const styles  = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0211',
        alignItems: 'center',
        justifyContent: 'center',
      },
    hero: {
        width: '100%',
        height: 240,
        marginTop: 20,
        blurRadius: 90,
    },
    titleBox: {
        position: 'absolute',
        top: 130,
        left: 5,
        width: 340,
        height: 90,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    heroTitle: {
        marginLeft: 20,
        marginBottom: 5,
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    heroDesc: {
        fontSize: 12,
        marginLeft: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        color: '#fff',
        backgroundColor: '#ff0211',
    },
  buttonText: {
      color: '#fff',
      fontSize: 16,
  },
})

export default HomeScreen;