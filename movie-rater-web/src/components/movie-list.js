import React from 'react';

var FontAwesome = require('react-fontawesome');


function MovieList(props) {

	const movieClicked = movie => evt => {
		props.movieClicked(movie);
	}
  const removeClicked = movie => {
		fetch(`${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 2d39ded84ee4f772d8a96fe96671e3ffc0e68db3'
      }
    }).then( resp => props.movieDeleted(movie))
    .catch( error => console.log(error))
	}

	return (
		<div>
			{ props.movies.map( movie => {
				return (
					<div key={movie.id}>
						<h3 onClick={movieClicked(movie)}>
							{movie.title}
						</h3>
						<FontAwesome name="edit"/>
						<FontAwesome name="trash" onClick={() => removeClicked(movie)}/>
					</div>
				)
			})}
		</div>
	)
}

export default MovieList;