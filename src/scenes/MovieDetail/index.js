import React, {useEffect, useState, useContext} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import apiCall from '../../utils/api';
import {Context} from '../../context/Store';
import styles from './MovieDetail.style';
import Loading from '../../components/Loading';
import Config from 'react-native-config';

const image_url = 'https://image.tmdb.org/t/p/'; //todo should be in config

const MovieDetailScene = ({navigation, route}) => {
  const {movieId} = route.params;
  const [loading, setLoading] = useState(true);
  const [context, dispatch] = useContext(Context);
  const {movieDetail} = context;

  useEffect(async () => {
    const selectedMovie = await apiCall({
      url: `movie/${movieId}`,
    });
    dispatch({type: 'SET_MOVIE', payload: selectedMovie.data});
    setLoading(false);
    console.log(Config.MOVIE_DB_IMAGE_URL);
  }, [movieId, dispatch]);

  return (
    <ScrollView style={styles.container}>
      <Loading visible={loading}>
        <Image
          style={styles.image}
          source={{
            uri: `${Config.MOVIE_DB_IMAGE_URL}w500${movieDetail.poster_path}`,
          }}
        />
        <View style={styles.contentInfo}>
          <Text style={styles.title}>{movieDetail.title}</Text>
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
