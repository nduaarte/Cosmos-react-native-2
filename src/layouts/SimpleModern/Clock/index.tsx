import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { RootState } from '../../../Redux/reducers/TimeReducer';
import { Container, Timer } from './styles';

const Clock: React.FC = () => {
  const time = useSelector((state: RootState) => state.TimeReducer.time);
  const timeFormated = moment(time).format('mm:ss');

  return (
    <Container>
      <Timer>{timeFormated}</Timer>
    </Container>
  );
}

export default Clock;