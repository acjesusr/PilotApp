/*
import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-item">PilotApp</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <br/>
                    <li className="navbar-item">
                        <Link to="/login">LOGIN</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}*/

import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import Menu from '@material-ui/icons/Menu';
import OptionMenu from './OptionMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='default'>
        <Toolbar>
            <OptionMenu />
          <Typography variant="h6" className={classes.title}>
            <Link to="/">PilotApp</Link>
          </Typography>
          {/*<Button color="inherit">Login</Button>*/}
          <Link to="/login"><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
