import { Box, Button, Grid, TextField } from "@mui/material";
import peliculas from "./GlovalVar";

const MovieAdd = () => {
  function addData() {
    var titol = document.getElementById("titol").value;
    var des = document.getElementById("desc").value;
    var dir = document.getElementById("dir").value;
    var img = document.getElementById("img").value;
    var nota = document.getElementById("nota").value;
    var ano = document.getElementById("any").value;
    var durada = document.getElementById("durada").value;

    let pelicula = {
      titol: titol,
      descripcio: des,
      direccio: dir,
      imatge: img,
      nota: nota,
      any: ano,
      durada: durada,
    };
    peliculas.push(pelicula);
    alert(
      "Pel·lícula guardada correctament! Click a Home i ves al Llistat de Pel·lícules per veure-la"
    );
  }

  return (
    <Box m={2} pt={3}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            id="titol"
            type="text"
            placeholder="Titol"
          ></TextField>
        </Grid>
        <Grid xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            id="desc"
            type="text"
            placeholder="Descripció"
          ></TextField>
        </Grid>
        <Grid xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            id="dir"
            type="text"
            placeholder="Direcció"
          ></TextField>
        </Grid>
        <Grid xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            id="img"
            type="text"
            placeholder="Imatge"
          ></TextField>
        </Grid>

        <Grid xs={4}>
          <TextField
            fullWidth
            variant="outlined"
            id="nota"
            type="text"
            placeholder="Nota (1-5)"
          ></TextField>
        </Grid>
        <Grid xs={4}>
          <TextField
            fullWidth
            variant="outlined"
            id="any"
            type="text"
            placeholder="Any"
          ></TextField>
        </Grid>
        <Grid xs={4}>
          <TextField
            fullWidth
            variant="outlined"
            id="durada"
            type="text"
            placeholder="Durada"
          ></TextField>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          className="button"
          id="button"
          onClick={addData}
        >
          Guardar
        </Button>
      </Grid>
    </Box>
  );
};

export default MovieAdd;
