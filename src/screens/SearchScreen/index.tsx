import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Searchbar } from 'react-native-paper';
import SectionTitle from '../../components/atoms/SectionTitle';
import CategoryBox from '../../components/molecules/CategoryBox';


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
            <ScrollView>
                <SectionTitle id={1} title="上位のカテゴリ" />
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                <SectionTitle id={2} title="すべてのカテゴリ" />
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
                    <View style={styles.box}>
                        <CategoryBox id={1} title="中華" image="" />
                        <CategoryBox id={1} title="カレー" image="" />
                    </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        width: "95%",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 14,
        backgroundColor: 'white', // テーマカラーに合わせて変更
        elevation: 10, // シャドウを削除
    },
    searchInput: {
        color: 'red', // テキストの色を白に変更
    },
    box: {
        width: "95%",
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default SearchScreen;