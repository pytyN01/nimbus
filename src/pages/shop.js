// import Head from "next/head";
import React from "react";

import { Grid, Button, Typography } from "@material-ui/core";

export default function Contact() {
  return (
    <div>
      {/* <Head>
        <title>Shop - Nimbus Coffee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Grid container>
        <Grid item>
          <Typography
            align="center"
            variant="h4"
            className="Caveat-Bold"
            gutterBottom
          >
            Shop
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
