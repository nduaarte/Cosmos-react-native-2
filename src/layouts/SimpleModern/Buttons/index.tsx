import React from 'react';
import { View } from 'react-native';

import { Container, StartButton } from './styles';

const Buttons: React.FC = () => {
  const timerOn = false; //redux

  return (
    <Container>
      <StartButton>{timerOn ? 'Pause' : 'Iniciar'}</StartButton>
    </Container>
  );
}

export default Buttons;