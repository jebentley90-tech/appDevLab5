import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
    title: string;
};

const Header = ({ title }: HeaderProps) => {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Simulation App</Text>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111827',
        paddingTop: 24,
        paddingBottom: 18,
        paddingHorizontal: 24,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',

    },
    subtitle: {
        color: '#d1d5db',
        marginTop: 4,
        fontSize: 16,

    },
});