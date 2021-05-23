import React from 'react';
import Router from './navigations/index';
import Store from './context/Store';

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
