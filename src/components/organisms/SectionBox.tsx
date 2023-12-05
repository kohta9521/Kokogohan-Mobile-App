import React from 'react';
import { View, StyleSheet } from 'react-native';

// type
export type SectionBoxProps = {
    id: number
    children: React.ReactNode
}


const SectionBox = ({
    id,
    children
}: SectionBoxProps) => {
    return (
        <View key={id}>
            {children}
        </View>
    )
}

const styles = 

export default SectionBox;