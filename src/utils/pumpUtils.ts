import { PUMP_MAX, PUMP_MIN } from  '../constants/simulation';
import { Pump } from '../types';

export const updatePumps = (pumps: Pump[]): Pump[] => {
    return pumps.map((pump) => {
        if (!pump.active) return pump;
        
        let nextValue = pump.value + pump.direction * 10;
        let nextDirection = pump.direction;

        if (nextValue <= PUMP_MIN) {
            nextValue = PUMP_MIN;
            nextDirection = 1;
        } else if (nextValue >= PUMP_MAX) {
            nextValue = PUMP_MAX;
            nextDirection = -1;
        }

        return {
            ...pump,
            value: nextValue,
            direction: nextDirection,
            total: pump.total + nextValue,
        };
    });
};