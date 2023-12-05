import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const Logo = () => {
    return (
        <View style={styles.logoBox}>
            <Image style={styles.img} source={require('../../../assets/logoIcon.png')} />
        </View>
    )
}


const styles = StyleSheet.create({
    logoBox: {
        width: 30,
        height:30,
    },
    img: {
        height: '100%',
    }
})

export default Logo;