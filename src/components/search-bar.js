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
        console.log('handleSearchResultClicked',searchResult);
        this.props.onSearchResultClicked(searchResult);
    }

    render() {
        return (
            <div className="search-bar">
                <input type="search"
                    className="form-control"
                    placeholder="Search for a JRE podcast"
                    value={this.props.inputValue}
                    onChange={this.handleInputChange.bind(this)} />
                {this.props.inputValue.length > 0 &&
                    <SearchResultList
                        resultList={this.props.searchResultList}
                        onResultClicked={this.handleSearchResultClicked.bind(this)} />}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        inputValue: state.search.searchInputVal,
        searchResultList: state.search.searchResultList
    }
}

export default connect(mapStateToProps, { searchPodCast, onSearchResultClicked })(SearchBar);