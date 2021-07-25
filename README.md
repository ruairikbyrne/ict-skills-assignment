# Assignment - ReactJS app.

Name: Ruairi Byrne

## Overview.

Additional objectives was to pull in the actors associated with a movie and be able to view the actors biography.


Additional features added to the application:
 
 + Top rated movies
 + Popular movies
 + List actors associate with movie
 + Link from movies details page to actors details page
 + List popular actors
 + Display actors details including images

## Setup requirements.

No additional requirements.

## API Data Model.

Additional TMDB endpoints used:

 + getMovieCredits - `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
 ![movie credits sample output](./moviecreditsoutput.PNG?raw=true)
 + getTopRatedMovies - `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
 ![top rated movies sample output](./topratedoutput.PNG?raw=true)
 + getActor - `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
 ![actor details sample output](./actordetailsoutput.PNG?raw=true)
 + getActors (Popular Actors) - `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_video=false&page=1`
 ![popular actors sample output](./listactorsoutput.PNG?raw=true)
 + getActorImages - `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
 ![actor images sample output](./actordetailsimagesoutput.PNG?raw=true)

## App Design.

### Component catalogue.

New/modified components:

![][stories]

### UI Design.

New/modified views:

![movie details](./moviedetails.PNG?raw=true)
>Shows detailed information on a movie, modified to show associated cast. Clicking full bio link will open the actors details page.

![top rated movies](./toprated.PNG?raw=true)
>Shows the top rated movies on tmdb.

![popular moves](./popular.PNG?raw=true)
>Shows the most popular movies on tmdb.  This is updated on a daily basis.

![list popular actors](./listactors.PNG?raw=true)
>Shows the most popular actors on tmdb.  This is updated on a daily basis.

![actor details](./actordetails.PNG?raw=true)
>Provides details of the selected actor.

### Routing.

New routes added to application:

+ GET /actors - displays popular actors, updated on a daily basis.
+ GET /movies/popular - displays the most popular films on tmdb.
+ GET /movies/top - displays the top rated movies on tmdb.
+ GET /actors/:id - retrieve details of a selected actor.

## Independent learning (If relevant).

Not applicable.




[stories]: ./storybook.png