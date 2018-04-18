import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Character = ({
  character,
  currentCharacter,
  fetchCharacter
}) => <figure
  onClick={() => fetchCharacter(character.url, history)}
  className={`character${currentCharacter.name === character.name ? ' current' : ''}`}
>
  <div className={`image-container ${character.name.toLowerCase().split(' ').join('-')}`} />
  <div className='title'>{character.name}</div>
</figure>

Character.propTypes = {
  character: PropTypes.object,
  currentCharacter: PropTypes.object.isRequired,
  fetchCharacter: PropTypes.func.isRequired
}

export default Character