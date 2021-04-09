import {
    AlanyaAllYears,
    ArubaAllYears, BarcelonaAllYears, HonoluluAllYears, IbizaAllYears,
    KingstonAllYears, KretaAllYears, ParisAllYears, PhuketAllYears, RhodosAllYears,
    RomeAllYears, SingaporeAllYears, StockholmAllYears, TokyoAllYears, UbudAllYears
} from './ConstantsCityAllYears'

import {
    Alanya, Aruba, Barcelona,
    Honolulu, Ibiza, Kingston,
    Kreta, Paris, Phuket,
    Rhodos, Rome, Singapore,
    Stockholm, Tokyo, Ubud
} from './AverageTemp'

export const cityHistoric = {
    'Alanya': [...AlanyaAllYears],
    'Aruba': [...ArubaAllYears],
    'Barcelona': [...BarcelonaAllYears],
    'Honolulu': [...HonoluluAllYears],
    'Ibiza': [...IbizaAllYears],
    'Kingston': [...KingstonAllYears],
    'Kreta': [...KretaAllYears],
    'Phuket': [...PhuketAllYears],
    'Rhodos': [...RhodosAllYears],
    'Rome': [...RomeAllYears],
    'Singapore': [...SingaporeAllYears],
    'Tokyo': [...TokyoAllYears],
    'Paris': [...ParisAllYears],
    'Ubud': [...UbudAllYears],
    'Stockholm': [...StockholmAllYears]
}

export const collectedAvgTempAndCities = [
    {
        city: 'Alanya',
        averageTemp: Alanya,
    },
    {
        city: 'Aruba',
        averageTemp: Aruba,
    },
    {
        city: 'Barcelona',
        averageTemp: Barcelona,
    },
    {
        city: 'Honolulu',
        averageTemp: Honolulu,
    },
    {
        city: 'Ibiza',
        averageTemp: Ibiza,
    },
    {
        city: 'Kingston',
        averageTemp: Kingston,
    },
    {
        city: 'Kreta',
        averageTemp: Kreta,
    },
    {
        city: 'Paris',
        averageTemp: Paris,
    },
    {
        city: 'Phuket',
        averageTemp: Phuket,
    },
    {
        city: 'Rhodos',
        averageTemp: Rhodos,
    },
    {
        city: 'Rome',
        averageTemp: Rome,
    },
    {
        city: 'Singapore',
        averageTemp: Singapore,
    },
    // {
    //     city: 'Stockholm',
    //     averageTemp: Stockholm,
    // },
    {
        city: 'Tokyo',
        averageTemp: Tokyo,
    },
    {
        city: 'Ubud',
        averageTemp: Ubud,
    },
]
// console.log(collectedAvgTempAndCities)