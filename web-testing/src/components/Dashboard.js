import React, {useState} from 'react';


function Dashboard() {
    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);
    const [hitCount, setHitCount] = useState(0);

    addBall = () => {
        if(ballCount === 4){
            return setBallCount(0);
    }else {
        return setBallCount(ballCount + 1);
    }};

    addStrike = () => {
        if(strikeCount === 3){
            return setStrikeCount(0);
        }else {
            return setStrikeCount(strikeCount + 1);
        }
    };

    addHit = () => {
        return setHitCount(hitCount + 1);
    }

    addFoul = () => {
        if(strikeCount === 2){
            return strikeCount;
        }else {
            return setStrikeCount(strikeCount + 1);
        }
    }

    resetGame = () => {
        return setHitCount(0),
            setStrikeCount(0),
            setBallCount(0);
    }

    return (
        <div>
            <button onClick={addStrike}>STRIKE</button>
            <button onClick={addBall}>BALL</button>
            <button onClick={addFoul}>FOUL</button>
            <button onClick={addHit}>HIT</button>
            <button onClick={resetGame}>RESET</button>
        </div>
    )

   
}
export default Dashboard;
