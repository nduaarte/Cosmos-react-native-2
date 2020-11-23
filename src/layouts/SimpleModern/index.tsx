import React from 'react';
import { View } from 'react-native';

import Clock from './Clock';
import StartButton from './StartButton';
import MenuButtons from './MenuButtons';

const SimpleModern: React.FC = () => {
  return(
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Clock />
      <StartButton />
      <MenuButtons />
    </View>
  );
}

export default SimpleModern;