import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Swal from "sweetalert2";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "150px",
    height: "100%",
    textAlign: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "24ch",
    },
  },
  form: {
    marginTop: "25px",
  },
  name: {
    marginBottom: "1%",
    "& .MuiTextField-root": {
      width: "50ch",
    },
  },
  textField: {
    "& .MuiFormLabel-root": {
      color: "black",
    },
    "& .MuiFormHelperText-root": {
      color: "black",
    },
  },
  contact: {
    marginBottom: "1%",
  },
  message: {
    marginBottom: "1%",
    "& .MuiTextField-root": {
      width: "50ch",
    },
  },
  btn: {
    width: "75%",
    display: "flex",
    "& .MuiButton-root": {
      marginLeft: "auto",
    },
  },
  black: {
    color: "#000",
    borderColor: "#000",
    fontSize: "1.2rem",
    fontFamily: "'Anaktoria', sans-serif",
  },
}));

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const classes = useStyles();

  const submit = () => {
    if (name && message) {
      if (email || phone) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Thanks ${name}! Your message is on the way!`,
          text: "We put our best owl on the job!",
          showConfirmButton: false,
          timer: 5500,
        }).then(() => reset());
      } else if (!email || !phone) {
        Swal.fire({
          icon: "error",
          title: "Missing Email or Phone",
          text: "How are we supposed to get in touch?",
          cancelButtonText: "Check Message",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Missing Some Info",
        text: "Tell us who you are and how we can help.",
        cancelButtonText: "Check Message",
      });
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const capitalizeString = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const formatPhone = (value, previousValue) => {
    if (!value) return value;

    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;

      if (cvLength < 7)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;

      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
        3,
        6
      )}-${currentValue.slice(6, 10)}`;
    }
  };

  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Typography variant="h4" className="Cinzel-M">
            JOIN THE NIMBUS COFFEE COMMUNITY
          </Typography>
        </div>
        <div className={classes.form}>
          <div className={classes.name}>
            <TextField
              error={
                name.length === 0 ? false : name.length === 1 ? true : false
              }
              required
              id="NAME"
              label="Name Or Title"
              variant="outlined"
              placeholder="Full Name Or Title"
              helperText={
                name.length === 0
                  ? "How can I greet you?"
                  : name.length === 1
                  ? "Spell it out... one letter at a time please."
                  : "How can I greet you?"
              }
              onChange={(e) => setName(capitalizeString(e.target.value))}
              value={name}
              className={clsx(classes.textField, classes.NAME)}
            />
          </div>
          <div className={classes.contact}>
            <TextField
              id="EMAIL"
              label="Email"
              variant="outlined"
              placeholder="Email"
              helperText={
                email.length === 0
                  ? "Don't want to talk on the phone?"
                  : !isValidEmail
                  ? "That doesn't look right to me.."
                  : "Don't want to talk on the phone?"
              }
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValidEmail(validateEmail(e.target.value));
              }}
              value={email}
              className={classes.textField}
              error={email.length === 0 ? false : !isValidEmail ? true : false}
            />
            <TextField
              id="PHONE"
              label="Phone"
              variant="outlined"
              placeholder="Phone"
              helperText={"Can't spell big words real good?"}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              value={phone}
              className={classes.textField}
            />
          </div>
          <div className={classes.message}>
            <TextField
              required
              multiline
              rows={5}
              id="MESSAGE"
              label="Message"
              variant="outlined"
              placeholder="Message"
              helperText={
                message.length === 0
                  ? "How can I help you? Feel free to be as detailed or as vague as you need to be."
                  : message.length < 10
                  ? "I'm going to need more than that if you want my help bud..."
                  : "How can I help you? Feel free to be as detailed or as vague as you need to be."
              }
              error={
                message.length === 0
                  ? false
                  : message.length < 10
                  ? true
                  : false
              }
              onChange={(e) => setMessage(capitalizeString(e.target.value))}
              value={message}
              className={classes.textField}
            />
          </div>
          <div className={classes.btn}>
            <Button
              variant="outlined"
              className={classes.black}
              disabled={message.length < 10 ? true : false}
              onClick={() => submit()}
            >
              Send Message
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
