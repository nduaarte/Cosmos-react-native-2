import React from 'react';
import { View } from 'react-native';

import { Container, Button, TextButton } from './styles';

const MenuButtons: React.FC = () => {
  return(
    <Container>
      <Button activeOpacity={0.8}>
        <TextButton>Pomodoro</TextButton>
      </Button>

      <Button activeOpacity={0.8}>
        <TextButton>Short Break</TextButton>
      </Button>

      <Button activeOpacity={0.8}>
        <TextButton>Long Break</TextButton>
      </Button>
    </Container>
  );
}

export default MenuButtons;