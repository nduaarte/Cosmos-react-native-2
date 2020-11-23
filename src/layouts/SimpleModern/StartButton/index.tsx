import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { Container, Button } from './styles';

const StartButton: React.FC = () => {
  const [timerOn, setTimerOn] = useState(false);
  const dispatch = useDispatch();

  function toggleTimer() {
    setTimerOn(!timerOn);
    dispatch({ type: 'UPDATE_TIMERON', value: timerOn });
  }

  return (
    <Container onPress={() => toggleTimer()} activeOpacity={0.8}>
      <Button>{timerOn ? 'Pause' : 'Iniciar'}</Button>
    </Container>
  );
}

export default StartButton;