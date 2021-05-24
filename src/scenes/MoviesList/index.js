import React, {useEffect, useContext, useState} from 'react';
import {Context} from '../../context/Store';
import {SafeAreaView, FlatList} from 'react-native';
import apiCall from '../../utils/api';
import Card from '../../components/Card';
import styles from '../MoviesList/MoviesList.style';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import {orderBy} from 'lodash';

const MovieListScene = ({navigation}) => {
  const [context, dispatch] = useContext(Context);
  const [moviesList, setMoviesList] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies().then(r => r);
  }, []);

  const getPopularMovies = async () => {
    const popularMovies = await apiCall({
      url: 'movie/popular',
    });

    const {results} = popularMovies.data;

    if (results) {
      dispatch({
        type: 'GET_MOVIES_LIST',
        payload: orderBy(results, ['vote_average'], ['desc']),
      });
      setMoviesList(orderBy(results, ['vote_average'], ['desc']));
      setLoading(false);
    } else {
      dispatch({type: 'GET_MOVIES_LIST', payload: []});
      setMoviesList([]);
      setLoading(false);
    }
  };

  const onChange = async item => {
    if (item) {
      const filteredMovies = await apiCall({
        url: 'search/movie',
        params: {
          query: item,
        },
      });
      const {results} = filteredMovies.data;
      dispatch({
        type: 'GET_MOVIES_LIST',
        payload: orderBy(results, ['vote_average'], ['desc']),
      });
      setMoviesList(orderBy(results, ['vote_average'], ['desc']));
      setLoading(false);
    } else {
      getPopularMovies();
    }
  };

  const renderMovieItem = ({item}) => {
    return (
      <Card
        item={item}
        onPress={() => navigation.navigate('MovieDetail', {movieId: item.id})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChange={onChange} />
      <Loading visible={false}>
        <FlatList
          id={'flat-list'}
          data={moviesList}
          renderItem={renderMovieItem}
          keyExtractor={movie => movie.id}
        />
      </Loading>
    </SafeAreaView>
  );
};

export default MovieListScene;
