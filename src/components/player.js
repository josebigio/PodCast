import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeAudio, playAudio, pauseAudio } from '../actions'

class Player extends Component {

    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
    }

    onPlay() {
        this.props.playAudio();
    }

    onPause() {
        this.props.pauseAudio();
    }

    onRewind() {

    }

    onForward() {

    }

    renderPlayPauseButton() {
        if (this.props.isPlaying) {
            return <FontAwesome name='pause-circle player-button-clickable' size='3x' onClick={this.onPause.bind(this)} />
        }
        return <FontAwesome name='play-circle player-button-clickable' size='3x' onClick={this.onPlay.bind(this)} />
    }

    render() {
        const { src } = this.props;
        return (
            <div className={`player slide-up flex-container`}>
                <div className="flex-container" style={{ width: "200px", justifyContent: "space-between", alignItems: "center" }}>
                    <FontAwesome name='backward player-button-clickable' size='2x' />
                    {this.renderPlayPauseButton()}
                    <FontAwesome name='forward player-button-clickable' size='2x' />
                    <audio src={src} ref={(audio) => { this.props.initializeAudio(audio) }} />
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
const mapStateToProps = (state) => {
    return {
        isPlaying: state.audio.isPlaying
    }
}
export default connect(mapStateToProps,{initializeAudio, playAudio, pauseAudio})(Player);

