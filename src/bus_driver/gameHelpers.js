export const STAGE_LENGTH = 12;
export const N_STOPS = 6;

export const createStage = () => {
    const stage = Array.from(Array(STAGE_LENGTH), () =>
        new Array(STAGE_LENGTH).fill([0, 'clear'])
    );

    const checkCorners = (value) => {
        switch (value) {
            case 0:
                return true;
            case 11:
                return true;
            case 48:
                return true;
            case 59:
                return true;
        }
        return false;
    }

    const stops = Array.from(Array(N_STOPS), (val, x) => {
        let stop = Math.floor(Math.random() * 60 / N_STOPS) + 60 / N_STOPS * x;

        while (checkCorners(stop)) {
            stop = Math.floor(Math.random() * 60 / N_STOPS) + 60 / N_STOPS * x
        }

        return stop;
    });

    let count = 0;
    let stop = 0;
    for (let i = 0; i < STAGE_LENGTH; i += 1) {
        for (let j = 0; j < STAGE_LENGTH; j += 1) {
            if (i === 0 || j === 0 ||
                i === STAGE_LENGTH - 1 || j === STAGE_LENGTH - 1 ||
                (i > 2 && i < 5) && (j > 2 && j < 5) ||
                (i > 2 && i < 5) && (j > 6 && j < 9) ||
                (i > 6 && i < 9) && (j > 2 && j < 5) ||
                (i > 6 && i < 9) && (j > 6 && j < 9)
            ) {
                if (count === stops[stop]) {
                    stage[i][j] = ['stop', 'stop']
                    stops[stop] = { x: j, y: i };
                    stop += 1;
                } else {
                    stage[i][j] = ['grass', 'grass']
                }
                count += 1;
            }
        }
    }
    return [stage, stops];
}

export const checkCollision = (player, stage, { dx: dx, dy: dy }) => {
    for (let y = 0; y < player.shape.length; y += 1) {
        for (let x = 0; x < player.shape.length; x += 1) {
            // Check on a bus cell
            if (player.shape[y][x] !== 0) {
                if (
                    // Check movement is within stage bounds
                    !stage[player.pos.y + dy] ||
                    !stage[player.pos.y + dy][player.pos.x + dx] ||
                    stage[player.pos.y + dy][player.pos.x + dx][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}