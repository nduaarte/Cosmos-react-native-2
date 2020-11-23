export interface RootState {
  time: number;
  timerOn: boolean;
}

const INITIAL_STATE = {
  time: 0,
  timerOn: false,
};

export default function TimeReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return { ...state, time: action.value };
    case 'UPDATE_TIMERON':
      return { ...state, timeOn: action.value };
    default:
      return state;
  }
}

export function UPDATE_TIME(value: number) {
  return { type: 'UPDATE_TIME', value };
};

export function UPDATE_TIMERON(value: boolean) {
  return { type: 'UPDATE_TIMERON', value };
};