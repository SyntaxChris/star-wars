import Loadable from 'react-loadable'
import React from 'react'

// Loadable component takes advantage of dynamic imports so we only render what is requested
const LoadableCharacters = Loadable({
  loader () { return import('./containers/CharactersContainer') },
  loading () { return null },
  render (loaded, props) {
    const Component = loaded.default
    return <Component {...props} />
  }
})

const CharactersRoute = ({ animate }) => <div className='characters-container'>
  <LoadableCharacters animate={animate} />
</div>

export default CharactersRoute