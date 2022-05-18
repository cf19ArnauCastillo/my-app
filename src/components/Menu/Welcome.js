import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bienvenido Juan Luis
          </Typography>
          <NavLink to="/">Home</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Welcome;
