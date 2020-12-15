import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Button, TextButton } from './styles';

const MenuButtons: React.FC = () => {
  const dispatch = useDispatch();
  const _25min = 1500000; // Valor inicial.
  const _15min = 900000;
  const _5min = 300000;

  function changeTime(ms: number) {
    dispatch({ type: 'UPDATE_TIMERON', value: false });
    dispatch({ type: 'UPDATE_TIME', value: ms });
  }

  return(
    <Container>
      <Button onPress={() => changeTime(_25min)} activeOpacity={0.8}>
        <TextButton>Pomodoro</TextButton>
      </Button>

      <Button onPress={() => changeTime(_15min)} activeOpacity={0.8}>
        <TextButton>Long Break</TextButton>
      </Button>

      <Button onPress={() => changeTime(_5min)} activeOpacity={0.8}>
        <TextButton>Short Break</TextButton>
      </Button>
    </Container>
  );
}

export default MenuButtons;