import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
// import { Button, Paper, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../../components/Copyright/Copyright";
import Title from "../../components/Title/Title";

// import "./App.css";

type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    console.log(data);
  });

  //   const [textValue, setTextValue] = useState<string>("");

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndIcon />
        </Avatar>
        <Title title={"Sign up"} />
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Last name"
            name="email"
            autoComplete="family-name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm password"
            type="password"
            id="password2"
            autoComplete="new-password"
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Do You have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Signup;
