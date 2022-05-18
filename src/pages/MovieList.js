import peliculas from './GlovalVar';
import "./MovieList.css";

const MovieList = () => {
  return (
      peliculas.forEach((item) => {
        <body>
        <input id="titol" type="text" placeholder="Titol" className="bigItem"></input><br></br><br></br>
        <input id="desc" type="text" placeholder="Descripció" className="bigItem"></input><br></br><br></br>
        <input id="dir" type="text" placeholder="Direcció" className="bigItem"></input><br></br><br></br>
        <input id="img" type="text" placeholder="Imatge (url)" className="bigItem"></input><br></br><br></br>
        <input id="nota" type="text" placeholder="Nota (1-5)" className="littleItem"></input>
        <input id="any" type="text" placeholder="Any" className="littleItem"></input>
        <input id="durada" type="text" placeholder="Durada" className="littleItem"></input><br></br><br></br>
      </body>
      })
    )
};

export default MovieList;
