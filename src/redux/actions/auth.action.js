import * as types from "../../types/auth.type";

export function RegisterAction(user) {
  console.log(user);
  return {
    type: types.REGISTRATION_REQUEST,
    payload: user,
  };
}

export function GetCountries() {
  return {
    type: types.COUNTRIES_REQUEST,
    payload: "",
  };
}

export function StepperChange(value) {
  console.log(value);
  return {
    type: types.STEPPER_INCREMENT,
    payload: value,
  };
}
