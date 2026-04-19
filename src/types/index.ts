export type ScreenName = 'dashboard' | 'stocks' | 'names' | 'oil';

export type Stock = {
    id: string;
    symbol: string;
    value: number;
    change: number;
};

export type Pump = {
    id: string;
    name: string;
    value: number;
    direction: 1 | -1;
    total: number;
    active: boolean;
};

export type GeneratedNameHistory = {
    id: string;
    names: string[];
    createdAt: string;
};