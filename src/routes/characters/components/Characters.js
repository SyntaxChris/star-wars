import ErrorModal from './ErrorModal'
import Films from './Films'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TableLoader from './TableLoader'
import { Route } from 'react-router-dom'
import '../styles/characters.scss'

const Character = ({
  clearError,
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
  clearError,
  characters,
  currentCharacter,
  error,
  fetchCharacter,
  fetchingFilms,
  history
}) => <section className='characters-panel'> 
  {fetchingFilms ? <TableLoader /> : null}
  {characters.map((character, i) => <Character
    key={i.toString()}
    character={character}
    currentCharacter={currentCharacter}
    fetchCharacter={fetchCharacter}
    history={history}
  />)}
  <Films />
  {error.message
    ? <ErrorModal
      clearError={clearError}
      detail={error.detail}
      message={error.message}
    />
    : null}
</section>

Characters.propTypes = {
  currentCharacter: PropTypes.object.isRequired,
  fetchCharacter: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default Characters