import Films from './Films'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../styles/characters.scss'

const Character = ({
  character,
  currentCharacter,
  fetchCharacter,
  history
}) => <figure
  onClick={() => fetchCharacter(character.url, history)}
  className={`character${currentCharacter.name === character.name ? ' current' : ''}`}
>
  <div className={`image-container ${character.name.toLowerCase().split(' ').join('-')}`} />
  <div className='title'>{character.name}</div>
</figure>

const Characters = ({
  characters,
  currentCharacter,
  currentFilms,
  fetchCharacter,
  history
}) => <section className='characters-panel'> 
  {characters.map((character, i) => <Character
    key={i.toString()}
    character={character}
    currentCharacter={currentCharacter}
    fetchCharacter={fetchCharacter}
    history={history}
  />)}
  <Route 
    path='/characters/:name/films'
    component={Films}
  />
</section>

Characters.propTypes = {
  currentCharacter: PropTypes.object.isRequired,
  fetchCharacter: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default Characters