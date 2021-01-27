import { Grid, Typography, Container } from "@material-ui/core";
import React from "react";
import BTN from "./BTN";

export default function DailyTea() {
  return (
    <section className="section2 parallax spilled-tea">
      <div className="parallax bean1" />
      <div className="parallax bean2" />
      <div className="thePaper">
        <React.Fragment>
          <img
            className="fLeft"
            alt="arrows crossed left"
            src="https://i.pinimg.com/originals/b8/0a/9b/b80a9b5e7fc92979084de8852b0adbe6.png"
          />
          <img
            className="fRight"
            alt="arrows crossed right"
            src="https://i.pinimg.com/originals/b8/0a/9b/b80a9b5e7fc92979084de8852b0adbe6.png"
          />
          <Typography variant="h1" className="TeaTitle" gutterBottom>
            The Daily Tea
          </Typography>
        </React.Fragment>

        <React.Fragment>
          <img
            className="imgRow"
            alt="magic sun"
            src="https://188736-558770-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/Sun-2.png"
          />
          <img
            className="imgRow"
            alt="palm chart"
            src="https://freesvg.org/img/oldpalmreadingchart.png"
          />
          <img
            className="imgRow"
            alt="astro chart"
            src="https://www.completehoroscope.org/images/horoscopes/2016-world-horoscope-chart-big.png"
          />
          <img
            className="imgRow"
            alt="owl"
            src="https://www.fws.gov/r9extaff/drawings/page26b.gif"
          />
          <img
            className="imgRow"
            alt="lock"
            src="https://cdn141.picsart.com/328409482032211.png"
          />
        </React.Fragment>

        <div className="center banner">
          <Typography variant="h3" className="TeaSubtitle">
            Non-Magic Lives Matter Movement Pumping Strong
          </Typography>
        </div>

        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography align="left" variant="h4" className="Anaktoria">
                Lorem ipsum dolor sit amet!
              </Typography>
              <Typography align="left" variant="h6" className="Anaktoria">
                Consectetur adipiscing elit. Pellentesque ut ligula at odio
                fringilla vestibulum eget tincidunt est. Praesent bibendum,
                risus ac maximus sodales, sem mauris aliquam lectus, eu
                fringilla diam urna venenatis nisl. Pellentesque tincidunt leo a
                magna luctus, ut sollicitudin velit vehicula. Praesent finibus,
                nisl vehicula sollicitudin pellentesque, odio mauris malesuada
                est, in malesuada odio metus ac tellus. Praesent eu porttitor
                enim. Donec gravida nulla at velit scelerisque lacinia.
                <br />
                <br />
                Morbi fringilla elit quis lorem posuere vehicula. Nulla tortor
                nunc, ullamcorper at porttitor nec, feugiat vitae libero. Duis
                tempor, dui nec mollis dapibus, lorem lacus tincidunt purus, in
                volutpat diam felis faucibus est. Ut consectetur, augue sit amet
                hendrerit laoreet, libero ipsum feugiat ex, eu accumsan dui sem
                sit amet libero. Sed dolor lacus, condimentum et ullamcorper
                eget, efficitur nec nisl.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <video
                style={{ border: "solid black 6px", marginBottom: "10px" }}
                height="340px"
                width="595px"
                src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov"
                autoPlay
                loop
                playsInline
                muted
              ></video>
              <Typography align="left" variant="h6" className="Anaktoria">
                Nunc turpis turpis, euismod non sagittis vel, tempus sed sapien.
                Nunc pharetra a mauris et consectetur. Curabitur facilisis
                semper risus eu aliquet. Morbi elit mauris, euismod quis auctor
                quis, auctor non velit. Quisque at condimentum massa. Aenean
                purus erat, vehicula ac nibh at, luctus scelerisque nulla. Fusce
                ut tristique neque, ac sagittis nisl.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <BTN
                fullWidth={false}
                variant="contained"
                background="black"
                color="white"
                size="2rem"
                mt="0"
                text="The Tea Has Been Spilled | Click to read more"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
}
