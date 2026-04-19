import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Joseph Bentley's Lab5</Text>
            <Text style={styles.text}>© 2026 Simulation App</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        padding: 14,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
        alignItems: 'center',
    },
    text: {
        color: '#6b7280',
        fontSize: 12,
    },
});