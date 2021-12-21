import {
  Button,
  Grid,
  Paper,
  TextField,
  Avatar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../../../styles/auth-styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import { ChangeEvent, SyntheticEvent, useEffect } from "react";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import AuthService from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const [id, setId] = React.useState(54);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const updateId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.valueAsNumber);
  };

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    const data = {
      id: id,
      email: email,
      name: name,
    };
    return AuthService.login(data.id, data.email, data.name)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        const status = res.status;
        //redirect logic
        if (status == 200) {
          //  window.location = "/script"
          navigate("/lists");

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Paper elevation={3} className={classes.paper}>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar className={classes.avatar}>
                <PeopleAltIcon className={classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <TextField
                  className={classes.textField}
                  id="demo-helper-text-misaligned-no-helper"
                  // label="Name"
                  required
                  fullWidth
                  type="number"
                  variant="outlined"
                  placeholder="Your Id"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={id}
                  onChange={updateId}
                />
              </Grid>

              <Grid item>
                <TextField
                  className={classes.textField}
                  id="demo-helper-text-misaligned-no-helper"
                  // label="Name"
                  required
                  fullWidth
                  type="text"
                  variant="outlined"
                  placeholder="Your Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={name}
                  onChange={updateName}
                />
              </Grid>

              <Grid item>
                <TextField
                  className={classes.textField}
                  id="demo-helper-text-misaligned-no-helper"
                  // label="Name"
                  required
                  fullWidth
                  type="text"
                  variant="outlined"
                  placeholder="Your Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={email}
                  onChange={updateEmail}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              <Button
                className={classes.button}
                type="submit"
                fullWidth
                variant="contained"
                onClick={submitHandler}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              <Typography variant="body2" className={classes.typography}>
                Don't have an account?
                <a href="/" className={classes.linkTypo}>
                  sign up
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignIn;
