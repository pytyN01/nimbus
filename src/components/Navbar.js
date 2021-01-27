import React from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav: {
    transition: "background-color .7s ease",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
  },
  title: {
    flexGrow: 1,
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  btn: {
    fontFamily: "'Anaktoria', sans-serif",
    color: "grey",
    "&:hover": {
      color: "white",
      paddingBottom: "10px",
    },
  },
  curBtn: {
    fontFamily: "'Anaktoria', sans-serif",
    fontSize: "1rem",
    color: "white",
  },
}));

export default function Navbar({ curPath, setCurPath }) {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.nav}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <Toolbar variant="dense">
        <Typography
          className={`${classes.title} Cinzel-S`}
          component={Link}
          variant="h6"
          to="/"
        >
          Nimbus Coffee DTLA
        </Typography>
        <Button
          className={curPath === 0 ? classes.curBtn : classes.btn}
          onClick={() => setCurPath(0)}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          className={curPath === 1 ? classes.curBtn : classes.btn}
          onClick={() => setCurPath(1)}
          component={Link}
          to="/menu"
        >
          Menu
        </Button>
        <Button
          className={curPath === 2 ? classes.curBtn : classes.btn}
          onClick={() => setCurPath(2)}
          component={Link}
          to="/apothecary"
        >
          Apothecary
        </Button>
        <Button
          className={curPath === 3 ? classes.curBtn : classes.btn}
          onClick={() => setCurPath(3)}
          component={Link}
          to="/academy"
        >
          Academy
        </Button>
        <Button
          className={curPath === 4 ? classes.curBtn : classes.btn}
          onClick={() => setCurPath(4)}
          component={Link}
          to="/contact"
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
