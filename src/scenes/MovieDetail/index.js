import React, {useEffect, useState, useContext} from 'react';
import {Button, Text} from 'react-native';
import API from '../../utils/api';
import {Context} from '../../context/Store';

const MovieDetailScene = ({navigation, route}) => {
  const {movieId} = route.params;
  const [loading, setLoading] = useState(true);
  const [context, dispatch] = useContext(Context);

  useEffect(() => {
    API.get(
      `movie/${movieId}?api_key=8571934db346822c0fb8d3724b254baa&language=en-US`,
    )
      .then(oResp => {
        // todo
        dispatch({type: 'SET_MOVIE', payload: oResp.data});
      })
      .catch(oErr => {
        // Todo
        console.log(oErr);
      });
  });

  return <Text>{context.movieDetail.overview}l</Text>;
};

export default MovieDetailScene;
