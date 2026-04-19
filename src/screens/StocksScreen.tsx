import React from 'react';
import { StyleSheet, Text, View, type DimensionValue } from 'react-native';
import { Stock } from  '../types';

type StocksScreenProps = {
    stocks: Stock[];
}

const StocksScreen = ({ stocks }: StocksScreenProps) => {
    const sortedStocks = [...stocks].sort((a, b) => b.value - a.value);
    const topStock = sortedStocks[0];

    return (
        <View>
            <Text style={styles.heading}>Stock Ticker</Text>

            {sortedStocks.map((stock) => {
                const barWidth = `${(stock.value / 200) * 100}%` as const;
                //const barWidth: DimensionValue = `${(stock.value / 200) * 100}%`;

                return (
                    <View
                        key={stock.id}
                        style={[
                            styles.card,
                            topStock?.id === stock.id && styles.topPerformer,
                        ]}
                    >
                        <Text style={styles.symbol}>{stock.symbol}</Text>
                        <Text>Value: {stock.value}</Text>
                        <Text>
                            Change: {stock.change >= 0 ? '+' : ''}
                            {stock.change}
                        </Text>

                        <View style={styles.barBackground}>
                            <View style={[styles.barFill, { width: barWidth }]} />
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default StocksScreen;

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
    topPerformer: {
        borderWidth: 2,
        borderColor: '#22c55e',
    },
    symbol: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 4,
    },
    barBackground: {
        height: 12,
        backgroundColor: '#e5e7eb',
        borderRadius: 999,
        overflow: 'hidden',
        marginTop: 8,
    },
    barFill: {
        height: '100%',
        backgroundColor: '#3b82f6',
    },
});