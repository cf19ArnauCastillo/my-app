import { Button, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MenuItem.css";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

const Menu = () => {
  const navigate = useNavigate();

  const MovieAdd = () => {
    navigate("/MovieAdd");
  };
  const MovieList = () => {
    navigate("/MovieList");
  };

  return (
    <Box m={2} pt={3}>
      <Container>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Button
            className="menu-item"
            variant="contained"
            color="error"
            onClick={MovieList}
          >
            <img src="movies.png" className="img"></img>
            <p className="text">Llistat de pel·lícules</p>
            <p className="text">Llistat de les meves pel·licules favorites</p>
          </Button>
          <Button
            className="menu-items"
            variant="contained"
            color="success"
            onClick={MovieAdd}
          >
            <img src="addmovie.png" className="img"></img>
            <p className="text">Afegir pel·licula</p>
            <p className="text">
              Afegir una nova pel·licula al meu listat de pel·licules favorites
            </p>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Menu;
