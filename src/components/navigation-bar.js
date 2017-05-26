import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigateTo } from '../actions'



class NavigationBar extends Component {

    render() {
        const { selection } = this.props;
        return (
            <div className="navigation-bar">
                <h7 className={`navigation-item ${selection==='comments' && 'selected'}`}
                onClick={()=>this.props.navigateTo("comments")}>Comments</h7>
                <h7 className={`navigation-item ${selection==='images' && 'selected'}`}
                onClick={()=>this.props.navigateTo("images")}>Images</h7>
            </div>
        );
    }


}
const mapStateToProps = (state) => {
    console.log('navigation state',state.navigation);
    return {
        selection:state.navigation.selection
    }
}
export default connect(mapStateToProps,{navigateTo})(NavigationBar);