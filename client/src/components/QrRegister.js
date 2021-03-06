import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
//import Button from '@material-ui/core/Button';
import QrReader from "react-qr-reader";

const styles = theme => ({
  content: {
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'row',
  },
  cameraDiv: {
    flex: '1 1 50%',
    maxWidth: '50%',
    maxHeight: '120px',
  },
});

class QrRegister extends Component {
  state = {
    delay: 1000,
    turn: null,
  };
  
  handleScan = (data) => {
    if (data) {
      try {
        console.log(data);
        this.setState({
          openSnackbar: true,
          turn: data,
        });
      } catch(e) {
        console.log(e);
      }
    }
  }

  handleError = err => {
    console.error(err);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <div className={classes.cameraDiv}>
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    );
  }
}

QrRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};
/*
const mapStateToProps = (state, ownProps) => ({
  user: state.user,
});

const mapDispatchToProps = {};*/

export default (withStyles(styles)(QrRegister));