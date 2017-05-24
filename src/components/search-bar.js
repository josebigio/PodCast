import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { bindActionCreators } from 'redux';
import { searchPodCast, onSearchResultClicked, handleSearchAll, onSearchFocus, onSearchOnBlur, mouseEntered, mouseLeft } from '../actions'
import SearchResultList from './search-result-list';

class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    handleInputChange(e) {
        this.props.searchPodCast(e.target.value, 50);
    }

    handleSearchResultClicked(searchResult) {
        this.props.onSearchResultClicked(searchResult);
    }

    getApproval(ratings) {
        return (parseInt(ratings.likeCount) / (parseInt(ratings.likeCount) + parseInt(ratings.dislikeCount)) * 100).toFixed(2);
    }

    handleOnFocus() {
        this.props.onSearchFocus();
    }

    handleOnBlur() {
        this.props.onSearchOnBlur();
    }

    handleMouseEnter() {
        this.props.mouseEntered();
    }

    handleMouseLeave() {
        this.props.mouseLeft();
    }

    render() {
        console.log('IS LOADING', this.props.searchLoading);
        return (
            <div className="search-bar">
                <h6 style={{ textAlign: "center" }}>{this.props.currentEpisode}</h6>
                <p1>{this.props.ratings && this.getApproval(this.props.ratings) + "%"}</p1>
                <div className="search-input-section">
                    <div className="search-input-wrapper">
                        <input type="search"
                            onFocus={this.handleOnFocus.bind(this)}
                            onBlur={this.handleOnBlur.bind(this)}
                            className="form-control search-input"
                            placeholder="Search for a JRE podcast"
                            value={this.props.inputValue}
                            onChange={this.handleInputChange.bind(this)} >
                        </input>
                            <FontAwesome name={`spinner ${this.props.searchLoading && 'fa-spin'}`} className="search-icon"/>
                    </div>

                    {(this.props.focused || this.props.mouseInside) &&
                        <SearchResultList
                            onMouseEnter={this.handleMouseEnter.bind(this)}
                            onMouseLeave={this.handleMouseLeave.bind(this)}
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
        focused: state.search.focused,
        mouseInside: state.search.mouseInside,
        searchLoading: state.search.searchLoading
    }
}

export default connect(mapStateToProps, { searchPodCast, onSearchResultClicked, handleSearchAll, onSearchFocus, onSearchOnBlur, mouseLeft, mouseEntered })(SearchBar);