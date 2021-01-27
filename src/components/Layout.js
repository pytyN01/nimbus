import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import MobileFooter from "./MobileFooter";
import { Hidden } from "@material-ui/core";
import NavbarMain from "./NavbarMain";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Hidden xsDown>
        <CssBaseline />
        <NavbarMain />
        <div>{props.children}</div>
      </Hidden>

      <Hidden smUp>
        <div style={{ marginBottom: "55px" }}>{props.children}</div>
        <MobileFooter />
      </Hidden>
    </React.Fragment>
  );
}
