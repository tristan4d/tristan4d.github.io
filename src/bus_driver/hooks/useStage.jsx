import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer, pickUpPassenger, dropOffPassenger, setPassengers) => {
    const [stage, setStage] = useState(createStage);

    const addPassenger = prevStage => {
        let availableStops = 0;
        prevStage[0].forEach((row, y) => row.forEach(
            (cell, x) => {
                if (cell[1] === 'stop') {
                    availableStops += 1;
                }
            }
        ))

        if (availableStops > 0) {
            const stop = Math.floor(Math.random() * availableStops);

            let count = 0;
            const newStage = prevStage[0].map(row => row.map(
                cell => {
                    if (cell[1] === 'stop' && count === stop) {
                        count += 1;
                        setPassengers(prev => ({
                            ...prev,
                            passengersWaiting: prev.passengersWaiting + 1
                        }));
                        return ['passenger', 'passenger'];
                    } else if (cell[1] === 'stop') {
                        count += 1;
                        return cell;
                    } else {
                        return cell;
                    }
                }
            ));

            return [newStage, prevStage[1]];
        }

        return prevStage;
    }

    useEffect(() => {
        const updateStage = prevStage => {

            player.passengers.forEach(passenger => {
                if (
                    (passenger.destination.y - player.pos.y === 0 && Math.abs(passenger.destination.x - player.pos.x) === 1) ||
                    (Math.abs(passenger.destination.y - player.pos.y) === 1 && passenger.destination.x - player.pos.x === 0)
                ) {
                    dropOffPassenger(passenger.destination);
                }
            })

            const newStage = prevStage[0].map((row, y) => row.map((cell, x) => {
                if (cell[1] === 'clear') {
                    return [0, 'clear'];
                } else if (cell[1] === 'passenger' && player.passengers.length < 2 && (
                    (y - player.pos.y === 0 && Math.abs(x - player.pos.x) === 1) ||
                    (Math.abs(y - player.pos.y) === 1 && x - player.pos.x === 0)
                )) {
                    let destination = prevStage[1][Math.floor(Math.random() * prevStage[1].length)];
                    while (destination.x === x && destination.y === y) {
                        destination = prevStage[1][Math.floor(Math.random() * prevStage[1].length)];
                    }
                    pickUpPassenger(destination);
                    setPassengers(prev => ({
                        ...prev,
                        waitTime: prev.totalWaitTime,
                        passengersWaiting: prev.passengersWaiting - 1,
                        passengersPickedUp: prev.passengersPickedUp + 1
                    }))
                    return ['stop', 'stop'];
                } else {
                    return cell;
                }
            }));

            player.shape.forEach((row, y) => row.forEach(
                (value, x) => {
                    if (value !== 0) {
                        newStage[(player.direction ? y : -y) + player.pos.y][(player.direction ? x : -x) + player.pos.x] = [
                            value,
                            'clear'
                        ]
                    }
                }
            ))

            return [newStage, prevStage[1]];
        };

        setStage(prev => updateStage(prev));
    }, [player]);

    return [stage, setStage, addPassenger];
}