import {
    STOCK_DELTA_MAX,
    STOCK_DELTA_MIN,
    STOCK_MAX,
    STOCK_MIN,
    STOCK_RANGE,
} from '../constants/simulation';
import { Stock } from '../types';

export const getRandomStockChange = (): number => {
    return Math.floor(Math.random() * (STOCK_RANGE)) + STOCK_DELTA_MIN + (Math.floor(Math.random() * 100) / 100);
};

export const updateStocks = (stocks: Stock[]): Stock[] => {
    return stocks.map((stock) => {
        const change = getRandomStockChange();
        const nextValue = Math.max(STOCK_MIN, Math.min(STOCK_MAX, stock.value + change));

        return {
            ...stock,
            value: nextValue,
            change,
        };
    });
};