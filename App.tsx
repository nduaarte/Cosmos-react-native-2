import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/Redux/store';
import SimpleModern from './src/layouts/SimpleModern';

export default function App() {
  return (
    <Provider store={store}>
      <SimpleModern />
    </Provider>
  );
}