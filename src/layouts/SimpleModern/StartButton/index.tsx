import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from '../../../Redux/reducers/TimeReducer';
import { Container, Button } from './styles';

const StartButton: React.FC = () => {
  const timerOn = useSelector((state: RootState) => state.TimeReducer.timerOn);
  const dispatch = useDispatch();

  function toggleTimerDispatch() {
    dispatch({ type: 'UPDATE_TIMERON', value: !timerOn });
  }

  return (
    <Container onPress={() => toggleTimerDispatch()} activeOpacity={0.8}>
      <Button>{timerOn ? 'Pause' : 'Start'}</Button>
    </Container>
  );
}

export default StartButton;