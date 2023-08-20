import { useState, useCallback } from "react";
import { PIECES } from '../gamePieces';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 1, y: 1 },
        shape: PIECES['bus'].shape,
        passengers: [],
        passengersServed: 0,
        totalTripTime: 0,
        collided: false,
        direction: true //true = left or up
    });

    const updateTripTimes = (delta) => {
        setPlayer(prev => {
            const newPassengers = prev.passengers.map(passenger => ({
                ...passenger,
                tripTime: passenger.tripTime += delta
            }))

            return { ...prev, passengers: newPassengers };
        })
    }

    const pickUpPassenger = (destination) => {
        setPlayer(prev => {
            const newPassengers = [...prev.passengers];

            if (prev.passengers.length < 2) {
                newPassengers.push({
                    destination: destination,
                    tripTime: 0
                })
            }

            return { ...prev, passengers: newPassengers };
        })
    }

    const dropOffPassenger = (destination) => {
        setPlayer(prev => ({
            ...prev,
            passengers: prev.passengers.filter(passenger => passenger.destination !== destination),
            passengersServed: prev.passengersServed + 1,
            totalTripTime: prev.passengers.reduce((acc, passenger) => passenger.destination === destination ? acc + passenger.tripTime : acc, prev.totalTripTime)
        }))
    }

    const updatePlayerPos = ({ dx, dy, collided }) => {
        const type = player.passengers.length === 0 ? 'bus' : player.passengers.length === 1 ? 'bus1' : 'bus2';

        const newShape = dx !== 0 ? PIECES[type].shape.map((_, index) =>
            PIECES[type].shape.map(col => col[index])) : PIECES[type].shape;
        const newDirection = (dx < 0 || dy < 0) ? true : false;

        setPlayer(prev => ({
            ...prev,
            pos: {
                x: (prev.pos.x + dx),
                y: (prev.pos.y + dy)
            },
            shape: collided ? prev.shape : newShape,
            collided: collided,
            direction: collided ? prev.direction : newDirection
        }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {
                x: 1,
                y: 1
            },
            shape: PIECES['bus'].shape,
            capacity: 0,
            passengers: [],
            passengersServed: 0,
            totalTripTime: 0,
            collided: false,
            direction: true
        })
    }, [])

    return [player, updateTripTimes, pickUpPassenger, dropOffPassenger, updatePlayerPos, resetPlayer];
}