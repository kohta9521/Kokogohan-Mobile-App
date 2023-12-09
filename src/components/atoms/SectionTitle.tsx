import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// props
export type SectionTitleProps = {
    id: number
    title: string
};


const SectionTitle = ({
    id,
    title
}: SectionTitleProps) => {
    return (
        <View key={id} style={styles.titleBox}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleBox: {
        width: "95%",
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        // paddingTop: 10,
        // paddingLeft: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    }
});

export default SectionTitle