import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeAudio, playAudio, pauseAudio, setAudioPosition, onScrubberDown, mouseMoving, onMouseUp } from '../actions'

class ProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isDragging && !nextProps.isDragging) {
            const audioPosition = this.props.duration * this.getAudioPercentage();
            this.props.setAudioPosition(audioPosition);
        }
    }

    getAudioPercentage() {
        if (this.props.isDragging) {
            return this.props.audioPosition / this.props.duration + (this.props.draggingOffset / window.outerWidth);
        } else {
            return this.props.audioPosition / this.props.duration;
        }
    }

    render() {
        let percentageString = "";
        percentageString = `${this.getAudioPercentage() * 100}%`
        return (
            <div className="progress-bar">
                <div style={{ height: "100%", width: percentageString, backgroundColor: "#ffdd00" }} />
                <div className="progress-scroller"
                    onMouseDown={(e) => { this.props.onScrubberDown(e) }}
                    onTouchStart={(e) => { this.props.onScrubberDown(e) }}
                    onTouchMove={(e) => { this.props.mouseMoving(e) }}
                    onTouchEnd={(e) => { this.props.onMouseUp(e) }}
                    style={{ left: percentageString, marginLeft: "-10px", backgroundColor: "#ffdd00" }} />
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        audioPosition: state.audio.position,
        duration: state.audio.duration,
        isDragging: state.progress.isDragging,
        draggingOffset: state.progress.draggingOffset,
        isInBg: !state.window.focused,
        warning: state.window.warning,
    }
}

export default connect(mapStateToProps, { playAudio, pauseAudio, setAudioPosition, onScrubberDown, onMouseUp, mouseMoving })(ProgressBar);
