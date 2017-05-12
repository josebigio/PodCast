import React from 'react';

const ProgressBar = ({progress}) => {
    const percentageString = `${progress*100}%`
    const progressScrollerPosition = 0.5*screen.width - 10;;
    console.log('width',screen.width);
    console.log('percentageString',percentageString);
    return (
        <div className="progress-bar">
            <div style={{height:"100%",backgroundColor:"#ffdd00",width:percentageString}}/>
            <div className="progress-scroller" style={{left:percentageString, marginLeft:"-10px", backgroundColor:"#ffdd00"}}/>
        </div>
    );
}

export default ProgressBar;