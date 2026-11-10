import { ALERT_MESSAGES, ALERT_SEVERITY, SOIL_LABELS, DEFAULT_SETTINGS } from './constants.js';
export const DEFAULT_SETTINGS_DTO = {
    ...DEFAULT_SETTINGS,
    updatedAt: '',
};
export function evaluateReading(soilMoisture, temperature, settings) {
    const alerts = [];
    let soilLevel = 'NORMAL';
    if (soilMoisture < settings.minSoilMoisture) {
        soilLevel = 'DRY';
        alerts.push({
            type: 'SOIL_TOO_DRY',
            value: soilMoisture,
            threshold: settings.minSoilMoisture,
            message: ALERT_MESSAGES.SOIL_TOO_DRY,
        });
    }
    else if (soilMoisture > settings.maxSoilMoisture) {
        soilLevel = 'WET';
        alerts.push({
            type: 'SOIL_TOO_WET',
            value: soilMoisture,
            threshold: settings.maxSoilMoisture,
            message: ALERT_MESSAGES.SOIL_TOO_WET,
        });
    }
    if (temperature > settings.maxTemperature) {
        alerts.push({
            type: 'TEMP_HIGH',
            value: temperature,
            threshold: settings.maxTemperature,
            message: ALERT_MESSAGES.TEMP_HIGH,
        });
    }
    else if (temperature < settings.minTemperature) {
        alerts.push({
            type: 'TEMP_LOW',
            value: temperature,
            threshold: settings.minTemperature,
            message: ALERT_MESSAGES.TEMP_LOW,
        });
    }
    return {
        soilLevel,
        soilCanonical: soilLevel === 'NORMAL',
        alerts,
    };
}
export function alertSeverity(type) {
    return ALERT_SEVERITY[type];
}
export function soilLabel(level) {
    return SOIL_LABELS[level];
}
export function formatValue(value) {
    if (value === null || value === undefined)
        return '--';
    return Number.isInteger(value) ? String(value) : value.toFixed(1);
}
export function isStale(lastSeenAt, timeoutSec, now = Date.now()) {
    if (!lastSeenAt)
        return true;
    const last = new Date(lastSeenAt).getTime();
    if (Number.isNaN(last))
        return true;
    return now - last > timeoutSec * 1000;
}
