import React from "react";

import ApothecaryNavbar from "./ApothecaryNavbar";
import Navbar from "./Navbar";

export default function NavbarMain() {
  const oPath = window.location.pathname;

  const path =
    oPath === "/"
      ? 0
      : oPath === "/menu"
      ? 1
      : oPath === "/apothecary"
      ? 2
      : oPath === "/academy"
      ? 3
      : oPath === "/contact"
      ? 4
      : null;

  const [curPath, setCurPath] = React.useState(path);

  return (
    <React.Fragment>
      {curPath === 2 ? (
        <ApothecaryNavbar curPath={curPath} setCurPath={(x) => setCurPath(x)} />
      ) : (
        <Navbar curPath={curPath} setCurPath={(x) => setCurPath(x)} />
      )}
    </React.Fragment>
  );
}
