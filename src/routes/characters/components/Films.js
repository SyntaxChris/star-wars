import Arrow from './Arrow'
import clearError from '../../../actions/characters'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/films.scss'

class Films extends Component {
  static propTypes = {
    currentCharacter: PropTypes.object,
    currentFilms: PropTypes.array,
    fetchingFilms: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      expand: !!this.props.currentCharacter.name && !this.props.fetchingFilms
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentCharacter.name || nextProps.fetchingFilms) {
      this.setState({ expand: true })
    }

    if (!nextProps.currentCharacter.name) {
      this.setState({ expand: false })
    }
  }

  handleExpandTable (expand) {
    this.setState({ expand })
  }

  render () {
    const {
      currentCharacter,
      currentFilms,
      fetchingFilms
    } = this.props
    // order films by release date -> earliest to latest
    const orderedFilms = currentFilms
      .sort((a, b) => moment(a.release_date) - moment(b.release_date))

    return <article className={`films${this.state.expand ? ' expand' : ''}`}>
      {fetchingFilms
        ? null
        : <div>
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
              {orderedFilms.map((film, i) => <tr key={i.toString()}>
                <td>{film.title}</td>
                <td>{film.director}</td>
                <td>{moment(film.release_date).format('dddd, MMMM MM YYYY')}</td>
              </tr>)}
            </tbody>
          </table>
        </div>}
    </article>
  }
}

const mapStateToProps = state => ({
  currentCharacter: state.characters.currentCharacter,
  currentFilms: state.characters.currentFilms,
  fetchingFilms: state.characters.fetchingFilms
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Films)
