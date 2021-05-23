import React, {useEffect, useState, useContext} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import API from '../../utils/api';
import {Context} from '../../context/Store';
import styles from './MovieDetail.style';
import Loading from '../../components/Loading';

const image_url = 'https://image.tmdb.org/t/p/'; //todo should be in config

const MovieDetailScene = ({navigation, route}) => {
  const {movieId} = route.params;
  const [loading, setLoading] = useState(true);
  const [context, dispatch] = useContext(Context);
  const {movieDetail} = context;

  useEffect(() => {
    API.get(
      `movie/${movieId}?api_key=8571934db346822c0fb8d3724b254baa&language=en-US`,
    )
      .then(oResp => {
        // todo
        dispatch({type: 'SET_MOVIE', payload: oResp.data});
        setLoading(false);
      })
      .catch(oErr => {
        // Todo
        console.log(oErr);
      });
  });

  return (
    <ScrollView style={styles.container}>
      <Loading visible={loading}>
        <Image
          style={styles.image}
          source={{
            uri: `${image_url}w500${movieDetail.poster_path}`,
          }}
        />
        <View style={styles.contentInfo}>
          <Text style={styles.title}>{movieDetail.title} (2020)</Text>
          <Text style={styles.info}>{movieDetail.original_language}</Text>
          <Text style={styles.info}>{movieDetail.release_date}</Text>
          <Text style={styles.info}>{movieDetail.status}</Text>
          <Text style={styles.info}>{movieDetail.vote_average}</Text>
          <Text style={styles.info}>{movieDetail.vote_count}</Text>
        </View>

        <View style={styles.contentOverview}>
          <Text style={styles.tagline}>{movieDetail.tagline}</Text>
          <Text style={styles.overview}>{movieDetail.overview}</Text>
        </View>
      </Loading>
    </ScrollView>
  );
};

export default MovieDetailScene;
