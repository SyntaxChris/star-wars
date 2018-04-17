import Loadable from 'react-loadable'
import React from 'react'

// Loadable component takes advantage of dynamic imports so we only render what is requested
const LoadableCharacters = Loadable({
  loader () { return import('./containers/CharactersContainer') },
  loading () { return null }
})

const CharactersRoute = () => <div className='characters-container'>
  <LoadableCharacters />
</div>

export default CharactersRoute