import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeAudio, playAudio, pauseAudio, setAudioPosition, onScrubberDown } from '../actions'

class ProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.isDragging && !nextProps.isDragging) {
            const audioPosition = this.props.duration * this.getAudioPercentage();
            this.props.setAudioPosition(audioPosition);
        }
    }

    getAudioPercentage() {
        if(this.props.isDragging) {
           return this.props.audioPosition/this.props.duration + (this.props.draggingOffset/window.outerWidth);
        } else {
            return this.props.audioPosition / this.props.duration;
        }
    }

    render() {
        let percentageString = "";
        percentageString = `${this.getAudioPercentage()*100}%`
        return (
            <div className="progress-bar">
                <div style={{ height: "100%", backgroundColor: "#ffdd00", width: percentageString }} />
                <div className="progress-scroller"
                    onMouseDown={(e) => { this.props.onScrubberDown(e) }}
                    onTouchStart={(e) => { this.props.onScrubberDown(e) }}
                    style={{ left: percentageString, marginLeft: "-10px", backgroundColor: "#ffdd00" }} />
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        audioPosition: state.audio.position,
        duration: state.audio.duration,
        isDragging:state.progress.isDragging,
        draggingOffset:state.progress.draggingOffset
    }
}

export default connect(mapStateToProps, { playAudio, pauseAudio, setAudioPosition, onScrubberDown })(ProgressBar);
