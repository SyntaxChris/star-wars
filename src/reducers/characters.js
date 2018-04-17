import characters from '../../characters'
import {
  ADD_FILM,
  CLEAR_FILMS,
  FETCH_CHARACTER,
  HANDLE_FETCH_CHARACTER_FAILURE
} from '../actions/types'

const initialState = {
  items: JSON.parse(JSON.stringify(characters)).characters,
  failedFetch: false,
  animate: false,
  currentCharacter: {},
  currentFilms: []
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
    case CLEAR_FILMS:
      return {
        ...state,
        currentFilms: []
      }
    case FETCH_CHARACTER:
      return { 
        ...state,
        currentCharacter: action.payload
      }
    case HANDLE_FETCH_CHARACTER_FAILURE:
      console.log('FAILED FETCH', action.payload)
      return state
    default:
      return state
  }
}

export default charactersReducer
