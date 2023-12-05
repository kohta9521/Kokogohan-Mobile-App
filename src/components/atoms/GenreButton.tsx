import React from 'react';
import { Button } from 'react-native-paper';

// type
export type GenreButtonProps = {
    id: string
    text: string
}


const GenreButton = ({
    id,
    text
}:GenreButtonProps) => {
    return (
        <Button key={id}　mode="contained" onPress={() => console.log('Pressed')}>
            {text}
        </Button>
    )
}

export default GenreButton;