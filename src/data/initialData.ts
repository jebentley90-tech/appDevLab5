import { Pump, Stock } from '../types';

export const initialStocks: Stock[] = [
    { id: '1', symbol: 'AAPL', value: 120, change: 0 },
    { id: '2', symbol: 'GOOG', value:  95, change: 0 },
    { id: '3', symbol: 'TSLA', value: 150, change: 0 },
    { id: '4', symbol: 'AMZN', value: 110, change: 0 },
    { id: '5', symbol: 'INTL', value:  65, change: 0 },
    { id: '6', symbol: 'SPCX', value:  61, change: 0 },
    { id: '7', symbol: 'DELL', value:  83, change: 0 },
    { id: '8', symbol: 'HNDA', value:  77, change: 0 },
];

export const initialPumps: Pump[] = [
    { id: '1', name: 'Pump A101', value: 28, direction:  1, total: 22, active: true },
    { id: '2', name: 'Pump A102', value: 61, direction: -1, total: 66, active: true },
    { id: '3', name: 'Pump A105', value: 42, direction:  1, total: 41, active: true },
    { id: '4', name: 'Pump B107', value: 86, direction: -1, total: 84, active: true },
    { id: '5', name: 'Pump B109', value: 11, direction:  1, total:  5, active: true },
    { id: '6', name: 'Pump C112', value: 53, direction:  1, total: 12, active: true },
    { id: '7', name: 'Pump C113', value: 87, direction:  1, total: 27, active: true },
    { id: '8', name: 'Pump C114', value: 65, direction: -1, total: 33, active: true },
];