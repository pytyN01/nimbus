import HelmetHelper from "../components/HelmetHelper";
import MainHome from "../components/MainHome";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <HelmetHelper title="Home Nimbus Coffee" description="" />

      <MainHome />
    </React.Fragment>
  );
}
