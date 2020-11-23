import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { RootState } from '../../../Redux/reducers/TimeReducer';
import { Container, Timer } from './styles';

const Clock: React.FC = () => {
  const time = useSelector((state: RootState) => state.time);
  const timeFormated = moment(time).format('mm:ss');

  return (
    <Container>
      <Timer>{timeFormated}</Timer>
    </Container>
  );
}

export default Clock;

  // const _20min = 1200000;
  // const _10min = 600000;
  // const _5min = 300000;