import React from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native';

// css
import Logo from '../../components/atoms/Logo';
import SectionTitle from '../../components/atoms/SectionTitle';


const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
        <ImageBackground source={require("../../../assets/sample.jpeg")} resizeMode="cover" style={styles.hero}>
            <View style={styles.titleBox}>
                <Text style={styles.heroTitle}>近くのリピートの多い店特集</Text>
                <Text style={styles.heroDesc}>あなたの周りの特にリピートの多いお店をまとめました。{"\n"}ぜひご活用ください！</Text>                
            </View>
        </ImageBackground>
        <SectionTitle id={1} title='ジャンル検索' />
    </View>
  )
}

const styles  = StyleSheet.create({
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
    }
})

export default HomeScreen;