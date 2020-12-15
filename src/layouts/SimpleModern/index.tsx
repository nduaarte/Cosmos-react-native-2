import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../Redux/reducers/TimeReducer';
import Clock from './Clock';
import StartButton from './StartButton';
import MenuButtons from './MenuButtons';

const SimpleModern: React.FC = () => {
  const timerOn = useSelector((state: RootState) => state.TimeReducer.timerOn);
  const time = useSelector((state: RootState) => state.TimeReducer.time);
  const [timing, setTiming] = useState(time);
  const dispatch = useDispatch();

  // Contador.
  useEffect(() => {
    let interval: any = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTiming((timing: number)=> timing - 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  // Parar contador.
  useEffect(() => {
    if(timing === 0) {
      Alert.alert('Tempo acabou!!');
      dispatch({ type: 'UPDATE_TIMERON', value: false });
      dispatch({ type: 'UPDATE_TIME', value: 0 });
    }
  }, [timing]);


  // Verifica para alternar entre POMODORO ou BREAK. 
  useEffect(() => {
    setTiming(time);
  }, [time]);

  return(
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Clock timing={timing} />
      <StartButton />
      <MenuButtons />
    </View>
  );
}

export default SimpleModern;