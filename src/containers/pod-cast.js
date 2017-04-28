import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { fetchComments } from '../actions'
import CommentList from '../components/comment-list';

class PodCast extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchComments('0yp7a7f3VGw');
    }

    render() {
        console.log('PodCast',this.props.comments);
        const {comments}  = this.props;
        if(!comments) {
            return <div>Loading...</div>
        }
        return(
            <div>
               <audio controls>
                    {/*<source src="horse.ogg" type="audio/ogg"/>
                    Your browser does not support the audio element.*/}
                </audio>
                <CommentList comments={comments}/>
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