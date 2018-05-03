import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import configureStore from '../store/config'
import Header from './Header'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import CharactersRoute from '../routes/characters'
import '../styles/application.scss'

// initialize store
const store = configureStore()

// top level routes
const AppRoutes = ({ animate }) => <BrowserRouter>
  <Switch>
    <Route path='/' render={()=> <CharactersRoute animate={animate} />} />
    <Route path='*' render={()=> <CharactersRoute animate={animate} />}/>
  </Switch>
</BrowserRouter>

// parent component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false,
      sound: new Howl({
        src: [
          'https://ia801703.us.archive.org/15/items/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3'
        ]
      }),
      intervalId: setInterval(() => this.soundCheck(), 500)
    }
  }

  componentWillMount () {
    // initiate theme song
    this.state.sound.play()
    // check if sound has downloaded and is playing
    this.soundCheck()
  }

  soundCheck () {
    if (this.state.sound.playing()) {
      // stop polling for sound playing status
      clearInterval(this.state.intervalId)
      // start animation
      setTimeout(() => this.setState({ animate: true }))
      // fade out sound after 18 seconds
      setTimeout(() => this.state.sound.fade(1.0, 0, 5000), 18000)
    }
  }

  render () {
    return <Provider store={store}>
      <div className='star-wars' style={{ height: '100%' }}>
        <Header animate={this.state.animate} />
        <AppRoutes animate={this.state.animate} />
      </div>
    </Provider>
  }
}

export default App
