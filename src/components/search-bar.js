import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchPodCast, onSearchResultClicked } from '../actions'
import SearchResultList from './search-result-list';

class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    handleInputChange(e) {
        this.props.searchPodCast(e.target.value);
    }

    handleSearchResultClicked(searchResult) {
        console.log('handleSearchResultClicked', searchResult);
        this.props.onSearchResultClicked(searchResult);
    }

    getApproval(ratings) {
        return (parseInt(ratings.likeCount)/(parseInt(ratings.likeCount) + parseInt(ratings.dislikeCount))*100).toFixed(2);
    }

    render() {
        return (
            <div className="search-bar">
                <h6 style={{textAlign:"center"}}>{this.props.currentEpisode}</h6>
                <p1>{this.props.ratings && this.getApproval(this.props.ratings) + "%"}</p1>
                <div className="search-input-section">
                    <input type="search"
                        className="form-control search-input"
                        placeholder="Search for a JRE podcast"
                        value={this.props.inputValue}
                        onChange={this.handleInputChange.bind(this)} />

                    {this.props.inputValue.length > 0 &&
                        <SearchResultList
                            resultList={this.props.searchResultList}
                            onResultClicked={this.handleSearchResultClicked.bind(this)} />}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        inputValue: state.search.searchInputVal,
        searchResultList: state.search.searchResultList,
        currentEpisode: state.search.currentEpisode,
        ratings: state.search.ratings,
    }
}

export default connect(mapStateToProps, { searchPodCast, onSearchResultClicked })(SearchBar);