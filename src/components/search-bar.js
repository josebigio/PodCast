import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
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

    handleDropDownClick() {
        console.log('handleDropDownClick');
    }

    render() {
        return (
            <div className="search-bar">
                <h6 style={{textAlign:"center"}}>{this.props.currentEpisode}</h6>
                <p1>{this.props.ratings && this.getApproval(this.props.ratings) + "%"}</p1>
                <div className="search-input-section">
                    <div className="search-input-wrapper">
                    <input type="search"
                        className="form-control search-input"
                        placeholder="Search for a JRE podcast"
                        value={this.props.inputValue}
                        onChange={this.handleInputChange.bind(this)} >
                        </input>
                         <FontAwesome className="search-icon" 
                            onClick={this.handleDropDownClick.bind(this)}
                            name="caret-down" />
                        </div>
    
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