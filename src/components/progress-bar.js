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
            console.log('dragging stopped');
        }
    }

    render() {
        let percentageString = "";
        if(this.props.isDragging) {
            // console.log('dragging %',(this.props.draggingOffset/screen.width));
            percentageString = `${(this.props.audioPosition/this.props.duration + (this.props.draggingOffset/window.outerWidth))*100}%`
        } else {
            percentageString = `${this.props.audioPosition / this.props.duration * 100}%`
        }
        // console.log('width', screen.width);
        // console.log('percentageString', percentageString);
        console.log('windowLuterWidth',window.outerWidth);
        console.log('windowInnerWidth',window.innerWidth);
        console.log('width',screen.width);
        return (
            <div className="progress-bar">
                <div style={{ height: "100%", backgroundColor: "#ffdd00", width: percentageString }} />
                <div className="progress-scroller"
                    onMouseDown={(e) => { this.props.onScrubberDown(e) }}
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
