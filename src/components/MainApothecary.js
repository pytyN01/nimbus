import { Grid, Typography, Container } from "@material-ui/core";
import ItemCard from "../components/ItemCard";
import MainFooter from "./MainFooter";
import BTN from "./BTN";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tumbler: {
    background: "url(/tumbler.webp) no-repeat center",
    backgroundSize: "cover",
    height: "100%",
    "&:hover": {
      background: "url(/tumbler3.webp) no-repeat",
      backgroundPosition: "50% 20%",
    },
  },
  tumbler16: {
    background: "url(/Tumbler16-1.jpg) no-repeat center",
    backgroundSize: "cover",
    height: "100%",
    "&:hover": {
      background: "url(/Tumbler16-2.jpg) no-repeat",
      backgroundPosition: "50% 45%",
    },
  },
}));

export default function MainApothecary() {
  const classes = useStyles();

  return (
    <div className="main">
      <section className="section2 apothecary" style={{ paddingTop: "47px" }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={6} style={{ padding: "0 4%", color: "white" }}>
            <Typography align="center" variant="h5" className="Anaktoria">
              Tumblers are made with a stainless steel exterior and a plastic
              liner.
            </Typography>
            <Typography align="center" variant="h5" className="Anaktoria">
              Double-walled construction allows for increased temperature
              retention.
            </Typography>
          </Grid>

          <Grid item xs={6} className={classes.tumbler}></Grid>
        </Grid>
      </section>
      <section className="section parallax item1">
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography align="center" variant="h3" className="Cinzel-M">
              Our Best Sellers
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className="center">
              <ItemCard />
            </div>
          </Grid>
        </Grid>
      </section>
      <section className="section2 item2" style={{ paddingTop: "0" }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{ paddingLeft: "8%", paddingRight: "8%" }}
          >
            <Typography align="center" variant="h2" className="Anaktoria">
              Check out our best-selling 16oz Tumbler
            </Typography>

            <div style={{ textAlign: "center" }}>
              <BTN
                fullWidth={false}
                variant="contained"
                background="black"
                color="white"
                size="1.6rem"
                mt="30px"
                text="Shop Now"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.tumbler16}></Grid>
        </Grid>
      </section>
      <section className="section parallax item3">
        <Container>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              style={{
                height: "100%",
                color: "white",
              }}
            >
              <Typography align="center" variant="h2" className="Anaktoria">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </Typography>

              <div style={{ margin: "0 30%" }}>
                <Typography
                  align="center"
                  variant="h4"
                  className="Anaktoria"
                  gutterBottom
                >
                  I've had ex-boyfriends who have pleased me less than this
                  coffee.
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  className="Anaktoria"
                  gutterBottom
                >
                  Alexis <small>( Verified Buyer )</small>
                </Typography>
              </div>
              <div style={{ textAlign: "center" }}>
                <BTN
                  fullWidth={false}
                  variant="contained"
                  background="white"
                  color="black"
                  size="1.6rem"
                  mt="30px"
                  text="Shop All Items"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <MainFooter />
    </div>
  );
}
