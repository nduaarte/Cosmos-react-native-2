import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from '../../../Redux/reducers/TimeReducer';
import { Container, Button } from './styles';

const StartButton: React.FC<RootState> = () => {
  const timerOn = useSelector((state: RootState) => state.TimeReducer.timerOn);
  const time = useSelector((state: RootState) => state.TimeReducer.time);
  const dispatch = useDispatch();

  function toggleTimer() {
    dispatch({ type: 'UPDATE_TIMERON', value: !timerOn });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime =- 1000;

      dispatch({ type: 'UPDATE_TIME', value: currentTime });
      console.log(time)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container onPress={() => toggleTimer()} activeOpacity={0.8}>
      <Button>{timerOn ? 'Pause' : 'Start'}</Button>
    </Container>
  );
}

export default StartButton;