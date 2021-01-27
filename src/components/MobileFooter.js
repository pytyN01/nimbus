import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ApartmentIcon from "@material-ui/icons/Apartment";
import PhoneIcon from "@material-ui/icons/Phone";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    backgroundColor: "black",
    "& .MuiBottomNavigationAction-root": {
      color: "grey",
    },
    "& .MuiBottomNavigationAction-root.Mui-selected": {
      color: "white",
    },
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  // const path = router.pathname;
  // const curPath =
  //   path === "/"
  //     ? 0
  //     : path === "/apothecary"
  //     ? 1
  //     : path === "/academy"
  //     ? 2
  //     : path === "/contact"
  //     ? 3
  //     : null;

  // const [value] = React.useState(curPath);

  return (
    <BottomNavigation value={""} showLabels className={classes.root}>
      <Fab
        color="secondary"
        aria-label="add"
        size="medium"
        className={classes.fabButton}
        component={Link}
        to="/menu"
      >
        <LocalDiningIcon />
      </Fab>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<ApartmentIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/apothecary"
        label="Apothecary"
        icon={<LocalMallIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/academy"
        label="Academy"
        icon={<AccountBalanceIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/contact"
        label="Contact"
        icon={<PhoneIcon />}
      />
    </BottomNavigation>
  );
}
