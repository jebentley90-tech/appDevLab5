import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type AppButtonProps = {
    title: string;
    onPress: () => void;
};

const AppButton = ({ title, onPress }: AppButtonProps) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 8,
    },
    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    }
});