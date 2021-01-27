import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import BTN from "./BTN";

const useStyles = makeStyles({
  root: {
    width: 350,
    margin: "50px 10px 0 10px",
    boxShadow: "none",
    "&:hover": {
      //   backgroundColor: "black",
    },
  },
  media: {
    height: 350,
  },
  btn: {
    background: "black",
    color: "white",
  },
});

const DATA = [
  {
    title: "Potion Maker Cap",
    price: "30.00",
    images: ["/PotionMaker-1.jpg", "/PotionMaker-2.jpg"],
  },

  {
    title: "Witch Please T-Shirt",
    price: "26.00",
    images: [
      "/WitchPlease-3.jpg",
      "/WitchPlease-4.jpg",
      // "/WitchPlease-1.jpg",
      // "/WitchPlease-2.jpg",
    ],
  },

  {
    title: "Gift Card Tarot Set",
    price: "50.00",
    images: ["/TarotCards-1.jpg", "/TarotCards-2.jpg"],
  },

  {
    title: "Ceramic Coffee Mug",
    price: "30.00",
    images: ["/CoffeeMug-3.jpg", "/CoffeeMug-2.jpg"],
  },
];

export default function ItemCard() {
  const classes = useStyles();

  const [hover, setHover] = React.useState(null);

  return (
    <React.Fragment>
      {DATA.map(({ title, price, images }, index) => (
        <Grid item key={index}>
          <Card className={classes.root}>
            <CardActionArea className={classes.action}>
              <CardMedia
                onMouseEnter={() => setHover(title)}
                onMouseLeave={() => setHover(null)}
                className={classes.media}
                image={hover === title ? images[1] : images[0]}
                title={title}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" className="Anaktoria">
                  {title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BTN
                fullWidth={true}
                variant="contained"
                background="black"
                color="white"
                size="1.6rem"
                mt="0"
                text={`Buy Item | U$ ${price}`}
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
}
