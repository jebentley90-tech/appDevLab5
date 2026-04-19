import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pump, Stock } from  '../types';

type DashboardScreenProps = {
    stocks: Stock[];
    pumps: Pump[];
    generatedNames: string[];
    totalNamesGenerated: number;
};

const DashboardScreen = ({
    stocks,
    pumps,
    generatedNames,
    totalNamesGenerated,
} : DashboardScreenProps) => {
    const totalStocks = stocks.length;
    const averageStockValue = stocks.length > 0 ? (stocks.reduce((sum, stock) => sum + stock.value, 0) / stocks.length).toFixed(2) : '0';
    const topStock = stocks.length > 0 ? [...stocks].sort((a, b) => b.value - a.value)[0] : null;

    const totalPumps = pumps.length;
    const totalPumpOutput = pumps.reduce((sum, pump) => sum + pump.total, 0);
    const activePumps = pumps.filter((pump) => pump.active).length;

    const currentGeneration = generatedNames.length;
    const totalNames = totalNamesGenerated;

    return (
        <View>
            <Text style={styles.heading}>Dashboard Analytics</Text>
            <View style={styles.card}>
                <Text>Total Stocks: {totalStocks}</Text>
                <Text>Average Stock Value: {averageStockValue}</Text>
                <Text>Top Stock: {topStock ? `${topStock.symbol} (${topStock.value.toFixed(2)})` : 'N/A' }</Text>
            </View>

            <View style={styles.card}>
                <Text>Total Pumps: {totalPumps}</Text>
                <Text>Active Pumps: {activePumps}</Text>
                <Text>Total Pump Output: {totalPumpOutput}</Text>
                
            </View>

            <View style={styles.card}>
                <Text>Latest Name Generation Count: {currentGeneration}</Text>
                <Text>Total Number of Generated Names: {totalNames}</Text>
            </View>
        </View>
    );
};

export default DashboardScreen;

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
});