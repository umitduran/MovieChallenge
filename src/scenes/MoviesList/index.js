import React, {useEffect, useContext, useState} from 'react';
import API from '../../utils/api';
import {Context} from '../../context/Store';
import Card from '../../components/Card';
import {SafeAreaView, FlatList} from 'react-native';
import styles from '../MoviesList/MoviesList.style';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';

const MovieListScene = ({navigation}) => {
  const [context, dispatch] = useContext(Context);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    API.get(
      // todo should be in config api key
      'movie/popular?api_key=8571934db346822c0fb8d3724b254baa&language=en-US&page=1',
    )
      .then(oResp => {
        const {results} = oResp.data;
        if (results) {
          // todo
          dispatch({type: 'GET_MOVIES_LIST', payload: results});
          setMoviesList(results);
        }
      })
      .catch(oErr => {
        // Todo
        console.log(oErr);
      });
  };

  const onChange = item => {
    if (item) {
      return API.get(
        // todo should be in config api key
        `search/movie?api_key=8571934db346822c0fb8d3724b254baa&query=${item}&language=en-US&page=1`,
      )
        .then(oResp => {
          const {results} = oResp.data;
          if (results) {
            // todo
            dispatch({type: 'GET_MOVIES_LIST', payload: results});
            setMoviesList(results);
            console.log(results);
          }
        })
        .catch(oErr => {
          console.log(oErr);
          return [];
        });
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
          data={moviesList}
          renderItem={renderMovieItem}
          keyExtractor={movie => movie.id}
        />
      </Loading>
    </SafeAreaView>
  );
};

export default MovieListScene;
