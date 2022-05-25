import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Bienvenido Juan Luis</Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button variant="contained">
            <NavLink to="/">Home</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Welcome;
