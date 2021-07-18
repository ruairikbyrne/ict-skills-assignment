import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import Spinner from '../components/spinner';


const PopularMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  
  return (
    <PageTemplate
      title='Popular Movies'
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToFavoritesIcon movie={movie} />
            <AddToPlaylistIcon movie={movie} />
          </>
        );    
      }}    
    />
  );
};
export default PopularMoviesPage;