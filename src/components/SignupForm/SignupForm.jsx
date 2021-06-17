import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundColor: "#222",
  },
  formContainer: {
    width: "36rem",
    padding: theme.spacing(4),
    height: "35rem",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  icon: {
    display: "flex",
    alignContent: "center",
    marginTop: "4px",
  },
  title: {
    textAlign: "center",
  },
  //override via global className
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "400px",
      padding: theme.spacing(0.4),
    },
    "& .MuiFormLabel-colorSecondary.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiInput-colorSecondary.MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main,
      borderWidth: "2px",
    },
    "& .MuiIconButton-root": {
      padding: theme.spacing(0.4),
      marginBottom: "-10px",
      color: theme.palette.secondary.main,
    },
    "& .MuiButton-root": {
      width: "70%",
      textTransform: "capitalize",
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
  },
}));

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      className={classes.container}
      justify="center"
      alignItems="center"
    >
      <Paper className={classes.formContainer} elevation={6}>
        <Typography variant="h4" gutterBottom className={classes.title}>
          Sign Up
        </Typography>
        <form className={classes.root}>
          <Grid container spacing={0.5} alignItems="center" justify="center">
            <Grid item>
              <IconButton className={classes.icon} dissableRipple>
                <AccountCircle />
              </IconButton>
            </Grid>
            <Grid item>
              <TextField
                id="standard-size-normal"
                variant="standard"
                label="username"
                placeholder="username"
                color="secondary"
                value={username}
                size="medium"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container spacing={0.5} alignItems="center" justify="center">
            <Grid item>
              <IconButton className={classes.icon} dissableRipple>
                <MailOutlineIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <TextField
                id="standard-size-normal"
                variant="standard"
                label="email"
                placeholder="abc@gmail.com"
                color="secondary"
                value={email}
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container spacing={0.5} alignItems="center" justify="center">
            <Grid item>
              <IconButton
                className={classes.icon}
                dissableRipple
                // aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Grid>
            <Grid item>
              <TextField
                id="standard-size-normal"
                variant="standard"
                label="password"
                placeholder="password"
                color="secondary"
                value={password}
                type={showPassword ? "text" : "password"}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() =>
                alert(
                  `HI ${username}\nYour credentials are:\n${email}\n${password}`
                )
              }
            >
              Sign up
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignupForm;
