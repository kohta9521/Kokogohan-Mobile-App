import React from 'react';
import { View, Text } from 'react-native';

// css


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
        <View key={id}>
            <Text>
                {title}
            </Text>
        </View>
    )
}

export default SectionTitle