import React, { Component } from 'react'
import { Alert, AlertContainer } from 'react-bs-notifier';
import { connect } from 'react-redux';
import { closeAlert } from './../../../state/alert/ActionAlert';

class AlertInfo extends Component {
    render() {
        if (this.props.isShow) return (
            <AlertContainer>
                <Alert type={this.props.typeAlert} timeout={3000} onDismiss={()=> this.props.closeAlert()}>{this.props.contentAlert}</Alert>
            </AlertContainer>
        );
        return null;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeAlert: () => {
            dispatch(closeAlert())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isShow: state.AlertReducer.isShowAlert,
        typeAlert: state.AlertReducer.typeAlert,
        contentAlert: state.AlertReducer.content
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);