import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown:false
        }
    }

    handleOnMouseEnter() {
        console.log('onMouseEnter');
        this.setState({
            shown:true
        });
    }

    handleOnMouseLeave() {
        console.log('onMouseLeave');
         this.setState({
            shown:false
        });
    }

    render() {
        const { src } = this.props;
        const className = this.state.shown ? "player-shown" : "player-hidden";
        return (
            <div className={`player slide-up flex-container ${className}`} onMouseEnter={this.handleOnMouseEnter.bind(this)} onMouseLeave={this.handleOnMouseLeave.bind(this)}>
                <div className = "flex-container" style = {{width:"200px", justifyContent:"space-between", alignItems:"center"}}>
                <FontAwesome name='backward player-button-clickable' size='2x'/>
                <FontAwesome name='play-circle player-button-clickable' size='3x'/>
                <FontAwesome name='forward player-button-clickable' size='2x'/>
                {/*<audio src={src}>
                </audio>*/}
                </div>
            </div>
        );
    }
}

const styles = {
    containerStyle: {

    },
    playButton: {
        height: "50px",
        width: "50px",
        backgroundColor: "#ffaaff"
    }
}

export default Player;
