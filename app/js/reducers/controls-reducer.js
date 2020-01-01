import calculatePath from '../helpers/calculate-path';
import pool from '../pool';

const INITIAL_STATE = {
  isCode: false,
  isMinimize: false,
  isActive: false,
  isHighlight: false,
  currentValue: 256,
};

const controls = (state = INITIAL_STATE, action) => {
  pool.push(state);
  switch (action.type) {
    case 'CODE_TAP': {
      return { ...state, isCode: !state.isCode };
    }
    case 'SET_MINIMIZE': {
      return { ...state, isMinimize: action.data };
    }
    // case 'RESET_MINIMIZE_TRANISTION': {
    //   return { ...state, isTransition: false };
    // }
    case 'SET_ACTIVE': {
      return { ...state, isActive: action.data };
    }
    // case 'SET_HIGHLIGHT': {
    //   return { ...state, isHighlight: action.data };
    // }
    case 'SET_CURRENT_MIDI_VALUE': {
      return { ...state, currentValue: action.data.value };
    }
  }
  return state;
};

export default controls;
