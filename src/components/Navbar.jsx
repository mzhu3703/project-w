import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    flexGrow: 1,
  },
  button: {
    color: 'white',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box flexGrow={1}>
            <Link to="/" style={{ textDecoration: 'none' }}>
               <Button className={classes.button}>Project W</Button>
            </Link>
          </Box>
          <Box>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <IconButton edge="start" className={classes.button} aria-label="menu">
                <HomeIcon />
              </IconButton>
            </Link>
          </Box>
          <Box>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button className={classes.button}>About</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
