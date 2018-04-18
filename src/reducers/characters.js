import characters from '../../characters'
import {
  ADD_FILM,
  CLEAR_ERROR,
  CLEAR_FILMS,
  FETCH_CHARACTER,
  FETCHING_FILMS,
  HANDLE_FETCH_CHARACTER_FAILURE
} from '../actions/types'

const initialState = {
  animate: false,
  currentCharacter: {},
  currentFilms: [],
  error: {
    message: '',
    detail: ''
  },
  failedFetch: false,
  fetchingFilms: false,
  items: JSON.parse(JSON.stringify(characters)).characters,
}

function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FILM:
      const {
        director,
        producer,
        release_date,
        title,
        ...rest
      } = action.payload

      return {
        ...state,
        currentFilms: [
          ...state.currentFilms,
          {
            director,
            producer,
            release_date,
            title
          }
        ]
      }
    case CLEAR_ERROR: 
      return {
        ...state,
        error: {
          message: '',
          detail: ''
        }
      }
    case CLEAR_FILMS:
      return {
        ...state,
        currentFilms: []
      }
    case FETCH_CHARACTER:
      const { films, name, url } = action.payload 
      return { 
        ...state,
        currentCharacter: { films, name, url }
      }
    case FETCHING_FILMS:
      return {
        ...state,
        fetchingFilms: action.payload
      }
    case HANDLE_FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        currentCharacter: {},
        currentFilms: [],
        error: {
          message: action.payload.message,
          detail: action.payload.response.detail
        },
        fetchingFilms: false
      }
    default:
      return state
  }
}

export default charactersReducer
