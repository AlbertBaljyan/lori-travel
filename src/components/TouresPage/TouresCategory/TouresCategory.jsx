import React, { useEffect, useState } from "react";
import "./TouresCategory.scss";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div className="filter__container">
      <button onClick={() => setActiveGenre(0)}>All</button>
      <button onClick={() => setActiveGenre(35)}>Comedy</button>
      <button onClick={() => setActiveGenre(28)}>Action</button>
    </div>
  );
};

const Movie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
    </div>
  );
};

const TouresCategory = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="toures-category">
      <div className="container">
        <div className="toures-category__wrapper">
          <div className="toures-category__filter">
            <Filter
              popular={popular}
              setFiltered={setFiltered}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
          </div>
          <div className="toures-category__items">
            {filtered.map((movie) => {
              return <Movie movie={movie} key={movie.id} />;
            })}
            <div className="category__item">
              <div className="item__photo"></div>
              <div className="item__title"></div>
              <div className="item__duration"></div>
              <div className="item__info">
                <div className="info__price"></div>
                <div className="info__date"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouresCategory;
