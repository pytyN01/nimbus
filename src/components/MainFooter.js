import { Grid, Typography } from "@material-ui/core";
import Iframe from "react-iframe";

export default function MainFooter() {
  return (
    <section className="section footer">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.0710532986004!2d-118.26571418493417!3d34.04204842571503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c79f3a7551c7%3A0x26e0b60bb97110f5!2sNimbus%20Coffee!5e0!3m2!1sen!2sus!4v1606630296436!5m2!1sen!2sus"
            width="100%"
            height="300px"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="subtitle2"
            className="Anaktoria"
            gutterBottom
          >
            (Please advise floo powder is against our fire codes)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingLeft: "40px" }}>
          <Typography
            align="left"
            variant="h4"
            className="Anaktoria"
            gutterBottom
          >
            OUR LOCATION
          </Typography>
          <Typography
            align="left"
            variant="h6"
            className="Anaktoria"
            gutterBottom
          >
            Blocks away from LA Live and 7th/Hope Metro Station.
          </Typography>
          <Typography
            align="left"
            variant="subtitle2"
            className="Anaktoria"
            gutterBottom
          >
            Parking structure located right next door as well as metered parking
            around the building.
          </Typography>
          <Typography
            align="left"
            variant="subtitle2"
            className="Anaktoria"
            gutterBottom
          >
            Bar tables and chairs available for outdoor seating, including a
            watering bowl for beasts both big and small. Inside you will find
            site-specific art installations & a touch of magic for an indoor
            experience to inspire the next generation of wizards. For those
            bound to the spell books, we offer complimentary WiFi, so come on in
            and stay a while!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingRight: "40px" }}>
          <Typography
            align="right"
            variant="h6"
            className="Anaktoria"
            gutterBottom
          >
            1115 South Hope St.
            <br />
            Los Angeles, California 90015
          </Typography>

          <Typography
            align="right"
            variant="h6"
            className="Anaktoria"
            gutterBottom
          >
            commonroom@nimbuscoffeela.com
            <br />
            Tel: 213-441-7309
          </Typography>

          <Typography
            align="right"
            variant="h6"
            className="Anaktoria"
            gutterBottom
          >
            Hour of Operation Monday - Friday 8 a.m - 2 p.m
            <br />
            Saturday - Sunday Closed
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" className="Anaktoria">
            © 2020 by Nimbus Coffee LA. Design by the young man llc
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
