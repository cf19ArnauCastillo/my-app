import peliculas from './GlovalVar';
import "./MovieList.css";

const MovieList = () => {
  return (
    <div>
      {peliculas.map((item) => {
        const list = (
          <>
          <div className='container'>
            <img src={item.imatge} className='imagen' />
            <div className="bottom-left">{item.nota}</div>
            <div className='bottom-centered-top'>{item.titol}</div>
            <div className='bottom-centered'>{item.direccio}</div>
          </div>
          </>
        );
      return list;
    })}
    </div>
    );
};

export default MovieList;
