import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FIRST_NAMES, LAST_NAMES } from '../constants/names';
import { GeneratedNameHistory } from '../types';
import { generateUniqueNames } from '../utils/nameUtils';
import AppButton from '../components/common/AppButton';

type NamesScreenProps = {
    generatedNames: string[];
    setGeneratedNames: React.Dispatch<React.SetStateAction<string[]>>;
    history: GeneratedNameHistory[];
    setHistory: React.Dispatch<React.SetStateAction<GeneratedNameHistory[]>>;
    setTotalNamesGenerated: React.Dispatch<React.SetStateAction<number>>;
};

const NamesScreen = ({
    generatedNames,
    setGeneratedNames,
    history,
    setHistory,
    setTotalNamesGenerated,
}: NamesScreenProps) => {
    const [countInput, setCountInput] = useState('3');
    const handleGenerate = () => {
        const count = Number(countInput);
        if(!count ||count < 1) return;
        const newNames = generateUniqueNames(FIRST_NAMES, LAST_NAMES, count);
        setGeneratedNames(newNames);

        const newHistoryItem: GeneratedNameHistory = {
            id: Date.now().toString(),
            names: newNames,
            createdAt: new Date().toLocaleTimeString(),
        };

        setHistory((prev) => [newHistoryItem, ...prev]);

        setTotalNamesGenerated((prev) => prev + newNames.length);
    };

    return (
        <View>
            <Text style={styles.heading}>Name Generator</Text>

            <View style={styles.card}>
                <Text style={styles.label}>How many unique names?</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={countInput}
                    onChangeText={setCountInput}
                    placeholder="Enter a number"
                />
                <AppButton title="Generate Names" onPress={handleGenerate} />
            </View>

            <View style={styles.card}>
                <Text style={styles.subheading}>Current Results</Text>
                {generatedNames.length === 0 ? (
                    <Text>No names yet.</Text>
                ) : (
                    generatedNames.map((name) => (
                        <Text key={name} style={styles.listItem}>
                            - {name}
                        </Text>
                    ))
                )}
            </View>

            <View style={styles.card}>
                    <Text style={styles.subheading}>History</Text>
                    {history.length === 0 ? (
                        <Text>No history yet.</Text>
                    ) : (
                        history.map((entry) => (
                            <View key={entry.id} style={styles.historyBlock}>
                                <Text style={styles.historyTime}>{entry.createdAt}</Text>
                                {entry.names.map((name) => (
                                    <Text key={`${entry.id}-${name}`}>- {name}</Text>
                                ))}
                            </View>
                        ))
                    )}
            </View>
        </View>
    );
};

export default NamesScreen;

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#dddeee',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
    },
    label: {
        marginBottom: 8,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#7393c4',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    subheading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    listItem: {
        marginBottom: 4,
    },
    historyBlock: {
        marginBottom: 12,
    },
    historyTime: {
        fontWeight: '700',
        marginBottom: 4,
    },
});