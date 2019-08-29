import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
            <ButtonBase>
                <Paper className={classes.paper}>xs=12</Paper>
            </ButtonBase>
        </Grid>
        <ButtonBase>
            <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
        </ButtonBase>
        <Grid item xs={12}>
          <ButtonBase><Paper className={classes.paper}>xs=12</Paper></ButtonBase>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}