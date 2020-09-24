import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import communities from "./../communities";
import ageGroups from "./../ageGroups";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

export default function App() {
  const classes = useStyles();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("javaholic");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState("");
  const [community, setCommunity] = React.useState("");

  const [message, setMessage] = React.useState("");

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);

  const handleCommunityChange = (event) => setCommunity(event.target.value);
  const handleClose = () => {
    setAge(null);
  };

  async function sampleFunc(toInput) {
    const response = await fetch("/api/contact", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput), // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body.id);
    setMessage(
      body.id ? "Contact sucessfully created" : "Contact creation failed"
    );
  }

  const handleSubmit = (event) => {
    const toInput = { firstName, lastName, email, phone, age, community };
    sampleFunc(toInput);

    console.log(`
      firstName: ${firstName}
      lastName: ${lastName}
      Email: ${email}
      phone: ${phone}
      age: ${age}
      Community: ${community}
    `);

    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter Your Contact Informatioin
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                value={firstName}
                label="First Name"
                name={firstName}
                autoComplete="firstName"
                onChange={handleFirstNameChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                value={lastName}
                label="Last Name"
                name={lastName}
                autoComplete="LastName"
                onChange={handleLastNameChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={email}
                label="Email"
                name={email}
                autoComplete="email"
                onChange={handleEmailChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                value={phone}
                label="Phone"
                name={phone}
                autoComplete="phone"
                onChange={handlePhoneChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                required
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="ageGpSelectLabel">Age Group</InputLabel>
                <Select value={age} onChange={handleAgeChange}>
                  {ageGroups.map((age, i) => (
                    <MenuItem value={i}>{age}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                required
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="CommunitySelectLabel">Community</InputLabel>
                <Select value={community} onChange={handleCommunityChange}>
                  {communities.map((community, i) => (
                    <MenuItem value={i}>{community}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            preventDefault
            className={classes.submit}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
}
