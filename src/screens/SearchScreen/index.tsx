import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Searchbar } from 'react-native-paper';


const SearchScreen = () => {
        // search
        const [searchQuery, setSearchQuery] = React.useState('');

        const onChangeSearch = query => setSearchQuery(query);
    
    return (
        <View>
            <Searchbar
                placeholder="ここごはんを検索"
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
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        fontSize: 14,
        backgroundColor: 'gray', // テーマカラーに合わせて変更
        elevation: 10, // シャドウを削除
    },
    searchInput: {
        color: 'red', // テキストの色を白に変更
    },
})

export default SearchScreen;