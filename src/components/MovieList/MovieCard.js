import peliculas from "../../pages/GlovalVar";
import "../../pages/MovieList.css";
import { Box } from "@mui/material";
const MovieCard = () => {
  return (
    <Box m={2} pt={3}>
      {peliculas.map((item) => {
        const list = (
          <>
            <div className="container">
              <img src={item.imatge} className="imagen" />
              <div>Nota: {item.nota}</div>
              <div>Titol: {item.titol}</div>
              <div>Direcció: {item.direccio}</div>
            </div>
          </>
        );
        return list;
      })}
    </Box>
  );
};

export default MovieCard;
