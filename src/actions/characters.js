import { browserHistory } from 'react-router'
import { CALL_API } from 'redux-api-middleware'
import {
  ADD_FILM,
  CLEAR_CHARACTER,
  CLEAR_ERROR,
  CLEAR_FILMS,
  FETCH_CHARACTER,
  FETCHING_FILMS,
  HANDLE_FETCH_CHARACTER_FAILURE,
  START_ANIMATION
} from './types'

const REQUEST = 'REQUEST'
const FAILURE = 'FAILURE'

export const addCharacterToUrl = (charName, history) => {
  const urlifiedName = charName.toLowerCase().split(' ').join('-')

  return history.push(`/${urlifiedName}/films`)
}

export const clearCharacter = () => ({
  type: CLEAR_CHARACTER,
  payload: null
})

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: null
})

export const clearFilms = () => ({
  type: CLEAR_FILMS,
  payload: null
})

export const fetchCharacter = (url, history) => (dispatch) => {
  return dispatch({
    [CALL_API] : {
      endpoint : url,
      method   : 'GET',
      types    : [REQUEST, FETCH_CHARACTER, HANDLE_FETCH_CHARACTER_FAILURE]
    }
  }).then((res) => {
    if (res.payload.name !== 'ApiError') {
      // add name to url if no error
      addCharacterToUrl(res.payload.name, history)
      // clear last characters films
      dispatch(clearFilms())
      // show table loader
      dispatch(fetchingFilms(true))

      return res.payload.films
    }
  }).then((films) => {
    if (films) { fetchFilms(films, dispatch) }
  })
}

export const fetchingFilms = fetching => ({
  type: FETCHING_FILMS,
  payload: fetching
})

export const fetchFilms = (filmUrls, dispatch) => {  
  const filmsToFetch = []

  filmUrls.forEach(filmUrl => dispatch({
    [CALL_API] : {
      endpoint : filmUrl,
      method   : 'GET',
      types    : [REQUEST, ADD_FILM, FAILURE]
    }
  }))

  return Promise.all(filmsToFetch)
    // .then(() => dispatch(fetchingFilms(false)))
}
