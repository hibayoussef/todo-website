import {
  Button,
  Grid,
  Paper,
  TextField,
  Avatar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../../../styles/auth-styles";
import PersonIcon from "@material-ui/icons/Person";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { ChangeEvent } from "react";
// import { useSelector, useDispatch } from "react-redux";
import React from "react";

interface NewUserInputProps {
  addUser(email: string, name: string): void;
  
}

const SignUp: React.FC<NewUserInputProps> = ({ addUser }) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
 
  const updateName = (event: ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value);
  }
 
  const updateEmail = (event: ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value);
  }

  const onAddUserClick = () =>{
    addUser(email, name);
    setName("");
    setEmail('');
    console.log('addUser(email, name)-1: ', email, name);
  }
  
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
                  // onChange = {(e) => setUser({...user, name: e.target.value})}
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
                onClick={ onAddUserClick }
                // onSubmit= {handleSubmit}
                // {...props}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              <Typography variant="body2" className={classes.typography}>
                Already have an account?
                <a href="/signin" className={classes.linkTypo}>
                  sign in
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUp;
