export const DeviceIntType = (dev_int_type: number): string => {
    switch (dev_int_type) {
        case 0:
            return '?';
            break;
        case 1:
            return 'CO2-Sensor';
            break;
        case 2:
            return 'CW-air-thvd';
            break;
        case 3:
            // return 'CW-L1';
            return 'CW-SS-TMEPNPK';
            break;
        case 4:
            return 'CW-SS-TMEPNPK';
            break;
        case 5:
            return 'CW-Pulse';
            break;
        case 6:
            return 'CO2-Sensor';
            break;
        default:
            return '?';
    }
}

export const DeviceIntToEnglish = (dev_int_type: number): string => {
    switch (dev_int_type) {
        case 0:
            return '?';
            break;
        case 1:
            return 'CO² Sensor';
            break;
        case 2:
            return 'CW-AIR-THVD';
            break;
        case 3:
            return 'CropWatch Legacy Box';
            break;
        case 4:
            return 'CW-SS-TMEPNPK';
            break;
        case 5:
            return 'CW-PULSEMeter';
            break;
        case 6:
            return 'CO² Sensor';
            break;
        default:
            return '?';
    }
}