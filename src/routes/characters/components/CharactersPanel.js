import Character from './Character'
import ErrorModal from './ErrorModal'
import Films from './Films'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TableLoader from './TableLoader'
import '../styles/characters.scss'

const CharactersPanel = ({
  animate,
  clearError,
  characters,
  currentCharacter,
  error,
  fetchCharacter,
  fetchingFilms
}) => <section className={`characters-panel${animate ? ' animate' : ''}`}> 

  {/* show table loader while fetching films for current character */
    fetchingFilms ? <TableLoader /> : null}

  {characters.map((character, i) => <Character
    key={i.toString()}
    character={character}
    currentCharacter={currentCharacter}
    fetchCharacter={fetchCharacter}
  />)}
  <Films />
  {/* show error modal if error message exists */
    error.message
    ? <ErrorModal
      clearError={clearError}
      detail={error.detail}
      message={error.message}
    />
    : null}
</section>

CharactersPanel.propTypes = {
  clearError: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
  currentCharacter: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  fetchCharacter: PropTypes.func.isRequired,
  fetchingFilms: PropTypes.bool.isRequired
}

export default CharactersPanel
