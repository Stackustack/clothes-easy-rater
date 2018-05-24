import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';

import ExpandMore from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';


import TopBar from './components/TopBar/TopBar'
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px',
  },
  tabs: {
    backgroundColor: theme.palette.background.paper
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  globalRatingContainer: {
    marginTop: '10px'
  }
});

class App extends Component {

  render() {
    const { classes } = this.props


    return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TopBar></TopBar>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={[classes.paper]}>
            <Typography variant="headline">
              PRODUCT INFO CONTAINER (with GLOBAL RATING)
            </Typography>
          </Paper>
          <Paper className={[classes.paper, classes.globalRatingContainer]}>
            <Typography variant="headline">
            RATINGS DISTRIBUTION CONTAINER
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
        <AppBar position="static" >
          <Tabs onChange={this.handleChange} value="0">
            <Tab label="PL" />
            <Tab label="DE" />
            <Tab label="NL" />
            <Tab label="FR" />
            <Tab label="UK" />
            <Tab label="ES" />
          </Tabs>
        </AppBar>

          <List component="nav" className={classes.list}>
            <ListItem button>
              <ListItemText primary="4 start from Michal" />
              <ExpandMore />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="5 start from Marta" />
              <ExpandMore />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="5 start from Andrew" />
              <ExpandMore />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="2 start from Roman" />
              <ExpandMore />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="3 start from Edward" />
              <ExpandMore />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="1 start from Josh" />
              <ExpandMore />
            </ListItem>
          </List>

        </Grid>
      </Grid>
    </div>
    );
  }
}

export default withStyles(styles)(App);
