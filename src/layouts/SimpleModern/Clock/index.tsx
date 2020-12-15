import React from 'react';
import moment from 'moment';

import { Container, Timer } from './styles';

interface PropsType {
  timing: number;
}

const Clock: React.FC<PropsType> = ({ timing }) => {
  const timeFormated = moment(timing).format('mm:ss');

  return (
    <Container>
      <Timer>{timeFormated}</Timer>
    </Container>
  );
}

export default Clock;