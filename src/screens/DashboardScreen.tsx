import Ract from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pump, Stock } from  '../types';

type DashboardScreenProps = {
    stocks: Stock[];
    pumps: Pump[];
    generatedNames: string[];
};

const DashboardScreen = ({
    stocks,
    pumps,
    generatedNames,
}: DashboardScreenProps) => {
    const averageStockValue = stocks.length > 0 ? (stocks.reduce((sum, stock) => sum + stock.value, 0) / stocks.length).toFixed(1) : '0';

    const topStock = stocks.length > 0 ? [...stocks].sort((a, b) => b.value - a.value)[0] : null;

    const totalPumpOutput = pumps.reduce((sum, pump) => sum + pump.total, 0);
    const activePumps = pumps.filter((pump) => pump.active).length;

    return (
        <View>
            <Text style={styles.heading}>Dashboard Analytics</Text>
            <View style={styles.card}>
                <Text>Total Stocks: {stocks.length}</Text>
                <Text>Average Stock Value: {averageStockValue}</Text>
                <Text>Top Stock: {topStock ? `${topStock.symbol} (${topStock.value})` : 'N/A' }</Text>
            </View>

            <View style={styles.card}>
                <Text>Total Pumps: {pumps.length}</Text>
                <Text>Active Pumps: {activePumps}</Text>
                <Text>Total Pump Output: {totalPumpOutput}</Text>
                
            </View>

            <View style={styles.card}>
                <Text>Generated Names: {generatedNames.length}</Text>
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
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
    },
});