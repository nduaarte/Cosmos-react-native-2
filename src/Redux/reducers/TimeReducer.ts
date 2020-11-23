export interface RootState {
  time: number;
}

const INITIAL_STATE = {
  time: 0
};

export default function TimeReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return { ...state, time: action.value };
    default:
      return state;
  }
}

export function UPDATE_TIME(value: number) {
  return { type: 'UPDATE_TIME', value };
};