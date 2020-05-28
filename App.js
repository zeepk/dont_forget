import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import {View} from 'react-native';

const App = () => {
  return (
    <View>
      <Header />
      <Dashboard />
    </View>
  );
};

export default App;
