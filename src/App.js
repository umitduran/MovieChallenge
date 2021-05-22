import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Router from './navigations/index';
import Store from './context/Store';
const Stack = createStackNavigator();

const App = () => {
  return <Router />;
};

const StoreProvider = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};

export default StoreProvider;
