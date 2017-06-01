import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments, searchPodCast } from '../actions'

import CommentList from '../components/comment-list';
import Player from '../components/player';
import SearchBar from '../components/search-bar';

class PodCast extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {comments}  = this.props;
        return(
            <div>
                <SearchBar/>
                <CommentList comments={comments} isLoading={this.props.isLoadingComments}/>
                <Player/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments,
        isLoadingComments: state.comments.isLoading,
    }
}
export default connect(mapStateToProps,{fetchComments,searchPodCast})(PodCast);