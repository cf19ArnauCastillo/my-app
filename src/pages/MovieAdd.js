import "./MovieAdd.css";
import peliculas from './GlovalVar';

const MovieAdd = () => {
  return (
    <body>
      <input id="titol" type="text" placeholder="Titol" className="bigItem"></input><br></br><br></br>
      <input id="desc" type="text" placeholder="Descripció" className="bigItem"></input><br></br><br></br>
      <input id="dir" type="text" placeholder="Direcció" className="bigItem"></input><br></br><br></br>
      <input id="img" type="text" placeholder="Imatge (url)" className="bigItem"></input><br></br><br></br>
      <input id="nota" type="text" placeholder="Nota (1-5)" className="littleItem"></input>
      <input id="any" type="text" placeholder="Any" className="littleItem"></input>
      <input id="durada" type="text" placeholder="Durada" className="littleItem"></input><br></br><br></br>
      <button className="button" id="button" onClick={addData}>Submit</button>
    </body>
  );
};

function addData(){
  var titol = document.getElementById("titol").value;
  var des = document.getElementById("desc").value;
  var dir = document.getElementById("dir").value;
  var img = document.getElementById("img").value;
  var nota = document.getElementById("nota").value;
  var ano = document.getElementById("any").value;
  var durada = document.getElementById("durada").value;

  let pelicula = {
    titol:titol,
    descripcio:des,
    direccio:dir,
    imatge:img,
    nota:nota,
    any:ano,
    durada:durada
  };
  peliculas.push(pelicula);
  console.log(peliculas);

}

export default MovieAdd;

