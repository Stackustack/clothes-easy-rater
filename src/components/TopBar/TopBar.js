import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import fetchAllDataProduct from '../../utils/scraper/scraper'

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "85%"
  },
  root: {
    flexGrow: 1
  }
});

class TopBar extends React.Component {
  state = {
    productNumber: '',
  };

  handleNameChange(event) {
    this.setState({
        productNumber: event.target.value
    });
  };

  handleCompareRatingsClick(event) {
    fetchAllDataProduct('CO411A0EZ-002').then(r => console.log(r))
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <TextField
              label="Product Code"
              className={classes.textField}
              value={this.state.productNumber}
              onChange={this.handleNameChange}
              placeholder="for example: R5921C028-Q11"
              margin="normal"
            />
            <Button 
                variant="raised" 
                className={classes.button}
                onClick={this.handleCompareRatingsClick}>
                Compare Ratings
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
