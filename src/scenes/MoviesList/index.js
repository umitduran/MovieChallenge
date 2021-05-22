import React, {useEffect, useContext, useState} from 'react';
import API from '../../utils/api';
import {Context} from '../../context/Store';
import Card from '../../components/Card';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  Text,
  View,
  Button,
} from 'react-native';

const MovieListScene = ({navigation}) => {
  const [context, dispatch] = useContext(Context);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    API.get(
      'movie/popular?api_key=8571934db346822c0fb8d3724b254baa&language=en-US&page=1',
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
        // Todo
        console.log(oErr);
      });
  }, []);

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
      <FlatList
        data={moviesList}
        renderItem={renderMovieItem}
        keyExtractor={movie => movie.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MovieListScene;
