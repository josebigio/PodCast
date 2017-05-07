import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeAudio, playAudio, pauseAudio } from '../actions'
import Timer from './timer';

class Player extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('componentWillMount', this.audio);
    }

    componentDidMount() {
        console.log('componentDidMount', this.audio);
        this.props.initializeAudio(this.audio);
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
        console.log('isPlaying:', this.props.isPlaying);
        if (this.props.isPlaying) {
            return <FontAwesome name='pause-circle player-button-clickable' size='3x' onClick={this.onPause.bind(this)} />
        }
        return <FontAwesome name='play-circle player-button-clickable' size='3x' onClick={this.onPlay.bind(this)} />
    }

    renderButtons(duration, src, audioPosition) {
        return (<div className="player-button-wrapper">
            <Timer time={duration} />
            <FontAwesome name='backward player-button-clickable' size='2x' />
            {this.renderPlayPauseButton()}
            <FontAwesome name='forward player-button-clickable' size='2x' />
            <Timer time={audioPosition} />
        </div>);
    }

    render() {
        const { src, audioPosition, duration, ready } = this.props;
        console.log(audioPosition);
        return (
            <div className={"player"}>
                <audio src={src} ref={(audio) => { this.audio = audio }} />
                {ready && this.renderButtons(duration,src,audioPosition)}
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
        isPlaying: state.audio.isPlaying,
        audioPosition: state.audio.position,
        duration: state.audio.duration,
        ready: state.audio.ready
    }
}
export default connect(mapStateToProps, { initializeAudio, playAudio, pauseAudio })(Player);
