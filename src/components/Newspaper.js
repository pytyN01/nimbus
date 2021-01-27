import React from "react";

import { Grid, Typography } from "@material-ui/core";

export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
      <hr
        style={{
          color: "black",
          borderColor: "black",
          borderWidth: "medium",
          margin: "0 30px 20px",
        }}
      />
      <hr
        style={{
          color: "black",
          borderColor: "black",
          margin: "-16px 30px 0px",
        }}
      />
      <Typography
        align="right"
        variant="h6"
        className="Caveat-Bold"
        style={{ margin: "-22px 800px 0 -30px" }}
      >
        The
      </Typography>
      <Typography
        align="right"
        variant="h1"
        className="Caveat-Bold"
        style={{ margin: "0 60px 0 0" }}
      >
        Nimbus Prophet
      </Typography>
      <hr
        style={{
          color: "black",
          borderColor: "black",
          borderWidth: "medium",
          margin: "0 30px 20px",
        }}
      />
      <hr
        style={{
          color: "black",
          borderColor: "black",
          margin: "-16px 30px 20px",
        }}
      />
    </React.Fragment>
  );
}
