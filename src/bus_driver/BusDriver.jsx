import { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createStage, checkCollision, N_STOPS } from "./gameHelpers";
import { usePlayer } from "./hooks/usePlayer";
import { useStage } from "./hooks/useStage";
import { useInterval } from "./hooks/useInterval";
import './BusDriver.css';

const initialPassengers = { waitTime: 0, totalWaitTime: 0, passengersWaiting: 0, passengersPickedUp: 0 };

export default function BusDriver() {
    const [gameTime, setGameTime] = useState(null);
    const [passengerTime, setPassengerTime] = useState(null);
    const [timer, setTimer] = useState(null);
    const [passengers, setPassengers] = useState(initialPassengers);
    const [canMove, setCanMove] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const [player, updateTripTimes, pickUpPassenger, dropOffPassenger, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage, addPassenger] = useStage(player, resetPlayer, pickUpPassenger, dropOffPassenger, setPassengers);

    const movePlayer = (dx, dy) => {
        if (!checkCollision(player, stage[0], { dx: dx, dy: dy })) {
            updatePlayerPos({ dx: dx, dy: dy, collided: false });
            setCanMove(false);
            setGameTime(500);
        } else {
            updatePlayerPos({ dx: 0, dy: 0, collided: true })
        }
    }
    const startGame = () => {
        setGameOver(false);
        setStage(createStage());
        resetPlayer();
        setPassengers(initialPassengers);
        setCanMove(true);
        setGameTime(500);
        setPassengerTime(4000);
        setTimer(100);
    }

    const move = (e) => {
        const keyCode = e.keyCode;

        if (!gameOver && canMove) {
            if (keyCode === 37) {
                movePlayer(-1, 0);
            } else if (keyCode === 39) {
                movePlayer(1, 0);
            } else if (keyCode === 40) {
                movePlayer(0, 1);
            } else if (keyCode === 38) {
                movePlayer(0, -1);
            }
        }

        e.preventDefault();
    }

    useInterval(() => {
        setCanMove(true);
        setGameTime(null);
    }, gameTime)

    useInterval(() => {
        setStage(prev => addPassenger(prev));
    }, passengerTime)

    useInterval(() => {
        updateTripTimes(timer / 1000);
        setPassengers(prev => ({
            ...prev,
            totalWaitTime: prev.totalWaitTime + timer / 1000 * prev.passengersWaiting
        }))
        if (passengers.passengersWaiting >= N_STOPS) {
            setGameOver(true);
            setCanMove(false);
            setGameTime(null);
            setPassengerTime(null);
            setTimer(null);
        }
    }, timer)

    return (
        <div
            className="BusDriverWrapper"
            role="button"
            tabIndex={0}
            onKeyDown={e => move(e)}
        >
            <div className="BusDriver">
                <Stage stage={stage[0]} passengers={player.passengers} gameOver={gameOver} />
                <aside>
                    <div>
                        <Display gameOver={gameOver} text={`Passengers Served: ${player.passengersServed}`} />
                        <Display gameOver={gameOver} text={`Avg. Wait (s): ${passengers.passengersPickedUp === 0 ? '' : Math.round(passengers.waitTime / passengers.passengersPickedUp * 10) / 10}`} />
                        <Display gameOver={gameOver} text={`Avg. Trip (s): ${player.passengersServed === 0 ? '' : Math.round(player.totalTripTime / player.passengersServed * 10) / 10}`} />
                    </div>
                    <Button
                        onClick={startGame}
                        variant="contained"
                        color={gameOver ? "error" : "success"}
                        sx={{ width: '100%', m: '0 auto' }}
                    >
                        {gameOver ? 'Play Again' : 'Start Game'}
                    </Button>
                </aside>
            </div>
            <Typography variant="body1">
                &emsp; How to play:
                <ol>
                    <li>Use the arrow keys to drive the blue bus around the map.</li>
                    <li>Passengers will arrive randomly at the grey bus stops and show up as a red tile.</li>
                    <li>Pick up passengers by driving by their stop in an adjacent tile.  You may carry a maximum of two at a time.</li>
                    <li>Drop off passengers at their destination stop(s), highlighted by a yellow border.</li>
                    <li>The game will end when there is a passenger waiting at each stop.</li>
                </ol>
            </Typography>
        </div>
    )
}