import { connect } from 'react-redux'
import { fetchCharacter } from '../../../actions/characters'
import { withRouter } from 'react-router'
import React from 'react'
import CharactersPanel from '../components/CharactersPanel'

const mapDispatchToProps = { fetchCharacter }

const mapStateToProps = state => ({
  characters: state.characters.items,
  currentCharacter: state.characters.currentCharacter,
  currentFilms: state.characters.currentFilms
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersPanel))
