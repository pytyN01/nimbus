import HelmetHelper from "../components/HelmetHelper";
import MainMenu from "../components/MainMenu";
import React from "react";

export default function Menu() {
  return (
    <React.Fragment>
      <HelmetHelper title="Menu Nimbus Coffee" description="" />

      <MainMenu />
    </React.Fragment>
  );
}
