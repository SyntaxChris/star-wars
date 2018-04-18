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
const AppRoutes = () => <BrowserRouter>
  <Switch>
    <Route path='/' component={CharactersRoute} />
    {/*<Route path='*' component={CharactersRoute} />*/}
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
      })
    }
  }

  componentWillMount () {
    this.state.sound.play()
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ animate: true })
    }, 500)

    setTimeout(() => this.state.sound.fade(1.0, 0, 5000), 20000)
  }

  render () {
    return <Provider store={store}>
      <div className='star-wars' style={{ height: '100%' }}>
        <Header animate={this.state.animate} />
        <AppRoutes />
      </div>
    </Provider>
  }
}

export default App
