import Characters from './Characters'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../styles/characters.scss'

const CharactersPanel = ({
  clearError,
  characters,
  currentCharacter,
  currentFilms,
  error,
  fetchCharacter,
  history
}) => <Characters
  clearError={clearError}
  characters={characters}
  currentCharacter={currentCharacter}
  currentFilms={currentFilms}
  error={error}
  fetchCharacter={fetchCharacter}
  history={history}
/>

CharactersPanel.propTypes = {
  characters: PropTypes.array.isRequired,
  currentCharacter: PropTypes.object.isRequired,
  fetchCharacter: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default CharactersPanel
