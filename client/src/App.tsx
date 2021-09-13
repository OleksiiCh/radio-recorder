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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { Button, Paper, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Copyright from "./components/Copyright/Copyright";
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

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    console.log(data);
  });

  const [textValue, setTextValue] = useState<string>("");
  const onTextChange = (e: any) => setTextValue(e.target.value);
  // const handleSubmit = () => console.log(textValue);

  const handleReset = () => setTextValue("");

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            autoComplete="current-password"
          />
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
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
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
export default App;

function prevApp() {
  return (
    <div />
    // <ScopedCssBaseline>
    //   <Container component="main" maxWidth="xs">
    //     {/* <CssBaseline /> */}
    //     <Avatar className={classes.avatar}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Login page
    //     </Typography>
    //     <form className={classes.form} onSubmit={onSubmit}>
    //       <div>
    //         <label htmlFor="firstname">Firs Name</label>
    //         <input
    //           {...register("firstname", { required: true, maxLength: 30 })}
    //           id="firstname"
    //           name="firstname"
    //           type="text"
    //         />
    //       </div>
    //       {errors.lastname && <div className="error">Fill you first name</div>}

    //       <TextField
    //         onChange={onTextChange}
    //         value={textValue}
    //         label={"email"}
    //       />

    //       <div>
    //         <label htmlFor="lastname">Firs Name</label>
    //         <input
    //           {...register("lastname", { required: true, maxLength: 30 })}
    //           id="lastname"
    //           name="lastname"
    //           type="text"
    //         />
    //       </div>
    //       {errors.firstname && <div className="error">Fill you last name</div>}

    //       <div>
    //         <label htmlFor="age">Age</label>
    //         <input
    //           {...register("age", { required: true, maxLength: 30 })}
    //           id="age"
    //           name="age"
    //           type="text"
    //         />
    //       </div>
    //       {errors.age && <div className="error">Fill age field</div>}

    //       <Button type="submit">Save</Button>
    //     </form>
    //   </Container>
    // </ScopedCssBaseline>
  );
}
