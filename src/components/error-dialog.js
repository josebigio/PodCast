import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideError } from '../actions'



class ErrorDialog extends Component {

    handleRetry() {
        this.props.retryList.forEach((fun) => {
            fun();
        });
        this.props.hideError();
    }

    handleDismiss() {
        this.props.hideError();
    }

    render() {
        console.log('error dialog', this.props);
        if (!this.props.error) {
            return <div />;
        }
        return (
            <div className="error-dialog-wrapper">
                <div className="error-dialog">
                    <div className="error-section"><h6>Woops</h6></div>
                    <div className="error-section"><p1>{this.props.error}</p1></div>
                    <div className="error-button-wrapper" >
                        <div className="error-button error-section" onClick={this.handleDismiss.bind(this)}>Ok</div>
                        <div className="error-button error-section" onClick={this.handleRetry.bind(this)}>Retry</div>
                    </div>
                </div>
            </div>
        );
    }


}
const mapStateToProps = (state) => {
    return {
        error: state.error.error,
        retryList: state.error.retryList,
    }
}
export default connect(mapStateToProps, { hideError })(ErrorDialog);