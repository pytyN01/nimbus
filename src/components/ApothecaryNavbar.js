import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  home: {
    fontFamily: "'Anaktoria', sans-serif",
    fontSize: "1rem",
    color: "white",
  },
}));

export default function ApothecaryNavbar({ curPath, setCurPath }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.nav} style={{ backgroundColor: "black" }}>
      <Toolbar variant="dense">
        <Typography className={`${classes.title} Cinzel-S`} variant="h6">
          Nimbus Apothecary
        </Typography>

        <Button
          className={classes.btn}
          // onClick={() => setCurPath(1)}
          // component={Link}
          // to="/menu"
        >
          Item1
        </Button>
        <Button
          className={classes.btn}
          // onClick={() => setCurPath(2)}
          // component={Link}
          // to="/menu"
        >
          Item2
        </Button>
        <Button
          className={classes.btn}
          // onClick={() => setCurPath(3)}
          // component={Link}
          // to="/menu"
        >
          Item3
        </Button>
        <Button
          className={classes.btn}
          // onClick={() => setCurPath(4)}
          // component={Link}
          // to="/menu"
        >
          Item4
        </Button>
        <Button
          className={classes.home}
          onClick={() => setCurPath(0)}
          component={Link}
          to="/"
        >
          Back to Nimbus
        </Button>
      </Toolbar>
    </AppBar>
  );
}
