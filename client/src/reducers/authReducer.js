import { FECTH_USER, SAVE_USER } from '../actions/types';
const initialState = {
  email: "",
  name: "",
  lastName: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FECTH_USER:
      return {
        ...state,
        email: action.payload
      };
    case SAVE_USER:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}