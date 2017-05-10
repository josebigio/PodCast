import React from 'react';

const Timer = ({time})=>{
    const hours = parseInt(time/3600);
    const mins = ("0" + parseInt(time/60)%60).slice(-2);
    const seconds = parseInt(time % 60);
    return (
        <div className="timer">
            <p>{`${hours}:${mins}:${seconds}`}</p>
            </div>
    );
}

export default Timer;