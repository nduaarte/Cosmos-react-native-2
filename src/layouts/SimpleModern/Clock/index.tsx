import React from 'react';
import { View } from 'react-native';
import { Circle } from 'react-native-progress';


import { Container } from './styles';

const Clock: React.FC = () => {

  return (
    <Container>
      <Surface width={500} height={500}>
        <Shape d={new Path().moveTo(0, 0).lineTo(200, 200)} fill="#d39494" />
      </Surface>
    </Container>
  );
}

export default Clock;