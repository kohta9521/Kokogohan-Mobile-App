import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// props
export type CategoryBoxProps = {
    id: number
    title: string
    image: string
};


const CategoryBox = ({
    id,
    title,
    image
}: CategoryBoxProps) => {
    return (
        <View key={id} style={styles.box}>
            <Image style={styles.image} source={require("../../../assets/sample.jpeg")} />
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '48%',
        height: 160,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

export default CategoryBox;