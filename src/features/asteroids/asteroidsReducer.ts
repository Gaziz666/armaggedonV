import {
  ASTEROIDS_LIST_ERROR,
  ASTEROIDS_LIST_LOADED,
  ASTEROIDS_LIST_LOADING,
  ASTEROIDS_VIEW_LIST_UPDATE,
  ASTEROID_DETAILS_LOADED,
  DESTROYED_LIST_UPDATE,
  LIST_COUNTER_INC,
} from './actionTypes'
import { AsteroidListType, AsteroidsActionTypes, AsteroidType } from './types'

const initialState = {
  isLoading: false,
  asteroidsData: {},
  asteroidsArr: [],
  errMsg: '',
  listCounter: 0,
  destroyedList: [],
  asteroidDetails: [],
}

export default (state = initialState, action: AsteroidsActionTypes) => {
  switch (action.type) {
    case ASTEROIDS_LIST_LOADING:
      return { ...state, isLoading: true }
    case ASTEROIDS_LIST_LOADED:
      return {
        ...state,
        asteroidsData: {
          ...state.asteroidsData,
          ...(action.payload as AsteroidListType),
        },
        isLoading: false,
        errMsg: '',
      }
    case ASTEROIDS_LIST_ERROR:
      return { ...state, errMsg: action.payload }
    case ASTEROIDS_VIEW_LIST_UPDATE:
      return {
        ...state,
        asteroidsArr: state.asteroidsArr
          ? [...state.asteroidsArr, ...(action.payload as Array<AsteroidType>)]
          : action.payload,
      }
    case LIST_COUNTER_INC:
      return { ...state, listCounter: state.listCounter + 1 }
    case DESTROYED_LIST_UPDATE:
      return {
        ...state,
        destroyedList: action.payload,
      }
    case ASTEROID_DETAILS_LOADED:
      return { ...state, asteroidDetails: action.payload, isLoading: false }
    default:
      return state
  }
}
