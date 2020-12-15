import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from '../../../Redux/reducers/TimeReducer';
import { Container, Button } from './styles';

const StartButton: React.FC = () => {
  const timerOn = useSelector((state: RootState) => state.TimeReducer.timerOn);
  const time = useSelector((state: RootState) => state.TimeReducer.time);
  const dispatch = useDispatch();

  function toggleTimerDispatch() {
    if(time === 0) {
      return Alert.alert('Por favor, selecione algum tempo para poder iniciar!');
    }

    dispatch({ type: 'UPDATE_TIMERON', value: !timerOn });
  }

  return (
    <Container onPress={() => toggleTimerDispatch()} activeOpacity={0.8}>
      <Button>{timerOn ? 'Pause' : 'Start'}</Button>
    </Container>
  );
}

export default StartButton;