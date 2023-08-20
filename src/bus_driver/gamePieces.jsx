export const PIECES = {
    0: { shape: [[0]], color: 'white' },
    bus: {
        shape: [
            ['bus', 0],
            ['bus', 0]
        ],
        color: 'blue'
    },
    bus1: {
        shape: [
            ['passenger', 0],
            ['bus', 0]
        ]
    },
    bus2: {
        shape: [
            ['passenger', 0],
            ['passenger', 0]
        ]
    },
    passenger: { shape: [['passenger']], color: 'red' },
    grass: { shape: [['grass']], color: 'green' },
    stop: {shape: [['stop']], color: 'grey'}
}