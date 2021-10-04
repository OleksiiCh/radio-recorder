import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = (props: any) => {
  console.log(props);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //@ts-ignore
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.authenticated;
  console.log(user);

  let LLbutton;
  if (isLoggedIn) {
    LLbutton = <LogoutButton />;
  } else {
    LLbutton = <LoginButton />;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/home">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/main">
              Main
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/user-profile">
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/signup">
              Sign up
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/logout">
              Logout
            </MenuItem>
          </Menu>

          <Typography variant="h6" className={classes.title}>
            Radio Recorder
          </Typography>
          {LLbutton}
        </Toolbar>
      </AppBar>
    </div>
  );
};

function LoginButton() {
  return (
    <Button
      color="primary"
      component={Link}
      to="/login"
      style={{ backgroundColor: "#ffe600", color: "#243996" }}
    >
      Login
    </Button>
  );
}

function LogoutButton() {
  return (
    <Button
      color="inherit"
      component={Link}
      to="/logout"
      style={{ backgroundColor: "#3e4642", color: "#FFFFFF" }}
    >
      Logout
    </Button>
  );
}

export default Header;
