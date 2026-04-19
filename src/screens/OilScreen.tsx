import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pump } from '../types';
import AppButton from '../components/common/AppButton';

type OilScreenProps = {
    pumps: Pump[];
    togglePump: (id: string) => void;
};

const OilScreen = ({ pumps, togglePump }: OilScreenProps) => {
    return (
        <View>
            <Text style={styles.heading}>Oil Pump Monitor</Text>
            {pumps.map((pump) => (
                <View key={pump.id} style={styles.card}>
                    <Text style={styles.title}>{pump.name}</Text>
                    <Text>Value: {pump.value}</Text>
                    <Text>Direction: {pump.direction === 1 ? 'Increasing' : 'Decreasing'}</Text>
                    <Text>Total Output: {pump.total}</Text>
                    <Text>Status: {pump.active ? 'Active' : 'Inactive'}</Text>

                    {pump.value >= 90 && <Text style={styles.alert}>Alert: High pump level detected.</Text>}

                    <AppButton
                        title={pump.active ? 'Deactivate' : 'Activate'}
                        onPress={() => togglePump(pump.id)}
                    />
                </View>
            ))}
        </View>
    );
};

export default OilScreen;

const styles = StyleSheet. create({
    heading: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 12,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 4,
    },
    alert: {
        color: '#dc2626',
        fontWeight: '700',
        marginVertical: 8,
    },
});