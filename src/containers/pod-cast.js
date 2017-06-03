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

    componentWillMount() {
        if(this.props.youtubeId) {
            this.props.fetchComments(this.props.youtubeId);
        }
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
        youtubeId: state.currentEpisode.youtubeId,
    }
}
export default connect(mapStateToProps,{fetchComments,searchPodCast})(PodCast);