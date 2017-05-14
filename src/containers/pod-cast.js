import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../actions'

import CommentList from '../components/comment-list';
import Player from '../components/player';

// const URL = "http://hwcdn.libsyn.com/p/e/2/5/e25debae5db1b903/p950.mp3?c_id=15042400&expiration=1493539844&hwt=0b4f03e2ea463d3de0ec33b3e7782c89"
const URL = "http://hwcdn.libsyn.com/p/e/3/1/e31848bc61150ef6/p958.mp3?c_id=15228877&expiration=1494716962&hwt=e40973e285752ee5bb72aae58d93035c"
class PodCast extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchComments('USg3NR76XpQ');
    }

    render() {
        const {comments}  = this.props;
        if(!comments) {
            return (
                <div className="loader-parent">
                    <div className="loader"/>
                </div>
            );
        }
        return(
            <div 
                >
                <CommentList comments={comments}/>
                <Player src={URL}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
}
export default connect(mapStateToProps,{fetchComments})(PodCast);