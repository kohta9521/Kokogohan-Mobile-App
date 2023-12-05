import React from 'react';
import { StyleSheet, Text, View, Button, Icon } from 'react-native';

// react-native-navigation
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// components import
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import SearchScreen from './src/screens/SearchScreen';
import RankingScreen from './src/screens/RankingScreen';
import MypageScreen from './src/screens/MypageScreen';

// icons
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          // header部分のスタイリング
          headerStyle: {
            backgroundColor: '#ff0211',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // tabBar部分のスタイリング
          tabBarActiveTintColor: '#ff0211',
          tabBarInactiveTintColor: 'gray',
          // headerLeft部分の要素の記述
          headerLeft: () => {
            // ロゴコンポーネントの配置
          },
          // headerRight部分の要素の記述
          headerRight: () => (
            <Button
              title='通知'
              onPress={() => alert('This is a button!')}
              icon={
                <Icon
                  name="bell"
                  type="font-awesome"
                  color="white"
                  size={20}
                />
              }
              buttonStyle={{ marginRight: 10 }}
            />
          ),
        })}
      >
        <Tab.Screen
          name="ホーム"
          component={HomeScreen}
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
              ),
          }}
        />
        <Tab.Screen
          name="見つける"
          component={SearchScreen}
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
              ),
          }}
        />
        <Tab.Screen
          name="マップ"
          component={MapScreen}
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
              ),
          }}
        />
        <Tab.Screen
          name="ランキング"
          component={RankingScreen}
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size} color={color} />
              ),
          }}
        />
        <Tab.Screen
          name="マイページ"
          component={MypageScreen}
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
