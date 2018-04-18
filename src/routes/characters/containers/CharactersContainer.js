import { connect } from 'react-redux'
import { clearError, fetchCharacter } from '../../../actions/characters'
import React from 'react'
import CharactersPanel from '../components/CharactersPanel'

const mapDispatchToProps = { clearError, fetchCharacter }

const mapStateToProps = state => ({
  characters: state.characters.items,
  currentCharacter: state.characters.currentCharacter,
  currentFilms: state.characters.currentFilms,
  error: state.characters.error,
  fetchingFilms: state.characters.fetchingFilms
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPanel)
