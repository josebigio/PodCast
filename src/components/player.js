import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeAudio, playAudio, pauseAudio, setAudioPosition } from '../actions'
import Timer from './timer';
import ProgressBar from './progress-bar';

const TIME_DELTA = 10;

class Player extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.initializeAudio(this.audio);
    }

    onPlay() {
        this.props.playAudio();
    }

    onPause() {
        this.props.pauseAudio();
    }

    onRewind() {
        this.props.setAudioPosition(this.props.audioPosition - TIME_DELTA);
    }

    onForward() {
        this.props.setAudioPosition(this.props.audioPosition + TIME_DELTA);
    }

    renderPlayPauseButton() {
        if (this.props.isPlaying) {
            return <FontAwesome name='pause-circle player-button-clickable' size='3x' onClick={this.onPause.bind(this)} />
        }
        return <FontAwesome name='play-circle player-button-clickable' size='3x' onClick={this.onPlay.bind(this)} />
    }

    renderButtons(duration, src, audioPosition) {
        return (
            <div className="player-button-wrapper">
                <Timer time={audioPosition} />
                <FontAwesome name='backward player-button-clickable' onClick={this.onRewind.bind(this)} size='2x' />
                {this.renderPlayPauseButton()}
                <FontAwesome name='forward player-button-clickable' onClick={this.onForward.bind(this)} size='2x' />
                <Timer time={duration} />
            </div>);
    }

    render() {
        const { src, audioPosition, duration, ready } = this.props;
        return (
            <div >
                <div className={"player"}>
                    <ProgressBar />
                    <audio src={src} ref={(audio) => { this.audio = audio }} />
                    {ready && this.renderButtons(duration, src, audioPosition)}
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
    let audioPosition = state.audio.position;
    if(state.progress.isDragging) {
        audioPosition+=(state.progress.draggingOffset/window.outerWidth*state.audio.duration);
    }
    return {
        isPlaying: state.audio.isPlaying,
        audioPosition: audioPosition,
        isDragging: state.progress.isDragging,
        draggingOffset: state.progress.draggingOffset,
        duration: state.audio.duration,
        ready: state.audio.ready
    }
}
export default connect(mapStateToProps, { initializeAudio, playAudio, pauseAudio, setAudioPosition })(Player);

