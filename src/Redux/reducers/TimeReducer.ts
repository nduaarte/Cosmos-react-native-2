export interface RootState {
  TimeReducer: any;
  time: number;
  timerOn: boolean;
}

const INITIAL_STATE = {
  time: 1500000,
  timerOn: false,
};

export default function TimeReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return { ...state, time: action.value };
    case 'UPDATE_TIMERON':
      return { ...state, timerOn: action.value };
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