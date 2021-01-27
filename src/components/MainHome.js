import { Typography } from "@material-ui/core";
import MainFooter from "./MainFooter";
import DailyTea from "./DailyTea";
import BTN from "./BTN";

export default function MainHome() {
  return (
    <div className="main">
      <section className="section welcome">
        <video src="/intro.mp4" autoPlay loop playsInline muted></video>
        <div className="animate__animated animate__fadeIn animate__slower animate__delay-5s">
          <Typography align="center" variant="h2" className="Cinzel-L">
            WELCOME TO NIMBUS LA
          </Typography>
          <Typography align="center" variant="h4" className="Cinzel-M">
            Coffee First Mischief Later
          </Typography>
        </div>
      </section>
      <section className="section parallax greeting">
        <div className="parallax snacks1">
          <div className="parallax snacks2">
            <Typography align="center" variant="h1" className="Anaktoria">
              You Have Arrived
            </Typography>
            <Typography align="center" variant="h5" className="Anaktoria">
              Greetings magical creatures of all ages! <br /> We invite you to
              enjoy a bit of nostalgia in hopes <br />
              you find a piece of yourself at Nimbus Coffee <br />
              located in the 🖤 of DTLA.
            </Typography>
          </div>
        </div>
      </section>
      <section className="section parallax witch-care">
        <div style={{ textAlign: "center" }}>
          <Typography align="center" variant="h1" className="Anaktoria">
            Bad Witch
          </Typography>
          <Typography align="center" variant="h3" className="Anaktoria">
            - Self Care -
          </Typography>
          <BTN
            fullWidth={false}
            variant="contained"
            background="black"
            color="white"
            size="1.6rem"
            mt="20px"
            text="Shop Now"
          />
        </div>
      </section>
      <DailyTea />
      <MainFooter />
    </div>
  );
}
