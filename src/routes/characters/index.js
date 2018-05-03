import Loadable from 'react-loadable'
import React from 'react'

// Loadable component takes advantage of dynamic imports so we only render what is requested
const CharactersRoute = Loadable({
  loader () { return import('./containers/CharactersContainer') },
  loading () { return null },
  render (loaded, props) {
    const Component = loaded.default

    return <div className='characters-container'>
      <Component {...props} />
    </div>
  }
})

export default CharactersRoute