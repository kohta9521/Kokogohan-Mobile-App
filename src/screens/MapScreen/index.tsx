import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// map
import MapView, { Marker, Callout } from 'react-native-maps';
// bottom modal
import Modal from 'react-native-modal';
// react native papaer
import { Searchbar } from 'react-native-paper';


const MapScreen = () => {
    const initialRegion = {
        latitude: 35.6252,   // 五反田駅の緯度
        longitude: 139.7238, // 五反田駅の経度
        latitudeDelta: 0.01, // 表示範囲の緯度の差
        longitudeDelta: 0.01, // 表示範囲の経度の差
    };

    const buildingLocation = {
        latitude: 35.62775515070043, // 五反田不二越ビルの緯度
        longitude: 139.72291768088752, // 五反田不二越ビルの経度
    };

    const carry = {
        latitude: 35.62744216089252, // 五反田不二越ビルの緯度
        longitude: 139.7229743616274,
    }

    // search
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);


    return (
        <>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchBar}
                    theme={{
                        colors: {
                          primary: 'red', // ボーダーの色
                          text: 'white', // テキストの色
                          placeholder: 'white', // プレースホルダーの色
                          background: 'rgba(255, 255, 255, 0.3)', // 背景色 (白色に blur をかけるために透明度を指定)
                        },
                    }}
                />
                <MapView
                    style={styles.map}
                    initialRegion={initialRegion}
                >
                    <Marker coordinate={buildingLocation} title="五反田不二越ビル" />
                    <Marker coordinate={carry} title="カレー maya">
                        <Callout>
                            <View>
                            <Text>店名: 五反田不二越ビル</Text>
                            <Text>ジャンル: サンプルジャンル</Text>
                            {/* 他の情報をここに追加 */}
                            </View>
                        </Callout>
                    </Marker>
                </MapView>
            </View>
            <View style={styles.bottomBox}>
                <Text style={styles.title}>MAYA五反田店</Text>
                <Text style={styles.date}>営業時間 : 日曜日 11:00 ~ 15:00 17:00 ~ 20:00</Text>
                <Text style={styles.member}>このお店に来たことある人 : 21人</Text>
                <Text style={styles.genru}>ジャンル： カレー</Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        fontSize: 14,
        backgroundColor: 'white', // テーマカラーに合わせて変更
        elevation: 10, // シャドウを削除
    },
    searchInput: {
        color: 'red', // テキストの色を白に変更
    },
    map: {
        flex: 1,
    },
    bottomBox: {
        height: 200,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    date: {
        fontSize: 13,
    }
});


export default MapScreen;