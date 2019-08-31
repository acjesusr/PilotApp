import { FECTH_EVENTS, SELECTED_EVENT } from '../actions/types';
const initialState = {
  events: [],
  event: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FECTH_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case SELECTED_EVENT:
      return {
        ...state,
        event: action.payload
      };
    default:
      return state;
  }
}