import React, { Component } from 'react'
import StarWarsIcon from './StarWarsIcon'
import '../styles/header'

const Header = ({ animate }) => <header className={`header${animate ? ' animate' : ''}`}>
  <div className='container'>
    <div className='content left' />
    <div className='content mid'><StarWarsIcon animate={animate} /></div>
    <div className='content right' />
  </div>
</header>

export default Header
