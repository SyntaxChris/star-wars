import Arrow from './Arrow'
import clearError from '../../../actions/characters'
import { connect } from 'react-redux'
import moment from 'moment'
import React, { Component } from 'react'
import '../styles/films.scss'

class Films extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expand: !!this.props.currentCharacter.name
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentCharacter.name) {
      this.setState({ expand: true })
    }
  }

  handleExpandTable (expand) {
    this.setState({ expand })
  }

  render () {
    const {
      currentCharacter,
      currentFilms
    } = this.props

    return <article className={`films${this.state.expand ? ' expand' : ''}`}>
      <div
        className={`close-btn${this.state.expand ? ' expand' : ''}`}
        onClick={() => this.handleExpandTable(false)}
      >
        <Arrow />
      </div>
      <table>
        <caption>Film Appearances</caption>
        <thead>
        <tr>
          <th>Title</th>
          <th>Director</th> 
          <th>Release</th>
        </tr>
        </thead>
        <tbody>
          {currentFilms.map((film, i) => <tr key={i.toString()}>
            <td>{film.title}</td>
            <td>{film.director}</td>
            <td>{moment(film.release_date).format('dddd, MMMM MM YYYY')}</td>
          </tr>)}
        </tbody>
      </table>
    </article>
  }
}

const mapStateToProps = state => ({
  currentCharacter: state.characters.currentCharacter,
  currentFilms: state.characters.currentFilms
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Films)
