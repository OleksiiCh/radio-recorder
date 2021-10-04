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
  Tab,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { Button, Paper, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../../components/Copyright/Copyright";
import Title from "../../components/Title/Title";
import { connect, useSelector } from "react-redux";
import { loginUser } from "../../store/actions/userActions";
import { Link, useHistory } from "react-router-dom";
// import "./App.css";

type Profile = {
  email: string;
  password: string;
  // firstname: string;
  // lastname: string;
  // age: number;
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

function Login(props: any) {
  //@ts-ignore
  const authenticated = useSelector((state) => state.user.authenticated);
  let history = useHistory();
  if (authenticated) history.push("/main");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm<Profile>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email: values.email,
      password: values.password,
    };
    props.loginUser(userData, props.history);
    if (authenticated) history.push("/main");
  };

  const handleChange = (e: any) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  //   const [textValue, setTextValue] = useState<string>("");

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Title title={"Sign in"} />
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
            // autoComplete="email"
            autoFocus
          />
          {errors.email && <div className="error">Fill you email</div>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            // autoComplete="current-password"
          />
          <div>Please use credentials: </div>
          <div>email: andy.vilson@gmail.com</div>
          <div>password: 123456*</div>
          or
          <div>email: oleksii.chaika@gmail.com</div>
          <div>password: 123456!</div>
          {errors.password && <div className="error">Fill you password</div>}
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/signup">Don't have an account? Sign Up</Link>
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

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});
//this map actions to our props in this functional component
const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
