import * as types from "../../types/auth.type";

const initState = {
  loading: false,
  stepValue: 0,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.REGISTRATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case types.STEPPER_INCREMENT:
      state = {
        ...state,
        stepValue: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default authReducer;
