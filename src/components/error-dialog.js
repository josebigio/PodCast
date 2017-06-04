import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideError } from '../actions'



class ErrorDialog extends Component {

    handleDismiss() {
        this.props.hideError();
    }

    render() {
        console.log('error dialog',this.props);
        if(!this.props.error) {
            return <div/>;
        }
        return (
            <div className="error-dialog-wrapper">
                <div className="error-dialog">
                   <div><h6>Woops</h6></div>
                   <div><p1>{this.props.error}</p1></div>
                   <div className="error-ok" onClick={this.handleDismiss.bind(this)}>ok</div>
                 </div>
            </div>
        );
    }


}
const mapStateToProps = (state) => {
    return {
        error: state.error.error
    }
}
export default connect(mapStateToProps, { hideError })(ErrorDialog);