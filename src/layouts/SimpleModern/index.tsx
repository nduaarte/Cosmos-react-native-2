import React from 'react';
import { View } from 'react-native';

import Clock from './Clock';

const SimpleModern: React.FC = () => {
  return(
    <View style={{flex: 1}}>
      <Clock />
    </View>
  );
}

export default SimpleModern;