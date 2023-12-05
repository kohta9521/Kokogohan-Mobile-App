import React from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';

// css
import Logo from '../../components/atoms/Logo';
import SectionTitle from '../../components/atoms/SectionTitle';
import GenreButton from '../../components/atoms/GenreButton';
import GenreScreen from '../../components/atoms/GenreButton';


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
        <ScrollView horizontal={true} style={styles.box}>
            <GenreButton style={styles.button} id='1' text='全て' />
            <GenreButton id='1' text='中華' />
            <GenreButton id='1' text='寿司' />
            <GenreButton id='1' text='イタリアン' />
            <GenreButton id='1' text='定食' />
            <GenreButton id='1' text='エスニック' />
            <GenreButton id='1' text='カレー' />
        </ScrollView>
        <Button title='タグで絞り込む' onPress={() => navigation.navigate('ジャンル')} />
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
    },
    box: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
    },
    ScrollView: {
        justifyContent: 'space-between',
    },
    button: {
        color: '#fff',
        backgroundColor: '#ff0211',
    },
})

export default HomeScreen;