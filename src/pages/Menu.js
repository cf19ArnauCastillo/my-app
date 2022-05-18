import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MenuItem.css";

const Menu = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/MovieAdd");
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          className="menu-item"
          variant="contained"
          color="error"
          onClick={handleClick}
        >
          <img src="movies.png" className="img"></img>
          <p className="text">Llistat de pel·lícules</p>
          <p className="text">Llistat de les meves pel·licules favorites</p>
        </Button>
        <Button
          className="menu-items"
          variant="contained"
          color="success"
          onClick={handleClick}
        >
          <img src="addmovie.png" className="img"></img>
          <p className="text">Afegir pel·licula</p>
          <p className="text">
            Afegir una nova pel·licula al meu listat de pel·licules favorites
          </p>
        </Button>
      </Stack>
    </div>
  );
};

export default Menu;
