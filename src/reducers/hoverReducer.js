import {FOOD_HOVER, PHOTO_HOVER, ME_HOVER} from './actionTypes';

export default function hoverReducer(state = { phHover: false, fdHover: false, meHover: false}, action) {
  switch (action.type) {
    case FOOD_HOVER:
      return {
          fdHover: true
      };
    case PHOTO_HOVER:
      return {
          phHover: true
      };
    case ME_HOVER:
      return {
          meHover: true
      };
    default:
      return state;
  }
}