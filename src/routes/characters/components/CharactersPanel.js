import Characters from './Characters'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../styles/characters.scss'

const CharactersPanel = (props) => <Characters {...props} />

CharactersPanel.propTypes = {
  characters: PropTypes.array.isRequired,
  currentCharacter: PropTypes.object.isRequired,
  error: PropTypes.object,
  fetchCharacter: PropTypes.func.isRequired,
  fetchingFilms: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
}

export default CharactersPanel
