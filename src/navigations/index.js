import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieListScene from '../scenes/MoviesList/index';
import MovieDetailScene from '../scenes/MovieDetail/index';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'MovieList'}
          component={MovieListScene}
          options={{title: 'Movie List'}}
        />
        <Stack.Screen
          name={'MovieDetail'}
          component={MovieDetailScene}
          options={{title: 'Movie Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
