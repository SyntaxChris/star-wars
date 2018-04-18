import React from 'react'
import TieFighter from './TieFighter'
import '../styles/errorModal.scss'

const ErrorModal = ({ clearError, detail, message }) => <div className='error-modal'>
  <div className='title'>{`${message}${detail}`}</div>
  <div className='icon-container'>
    <TieFighter />
  </div>
  <div className='btn-container'>
    <button onClick={() => clearError()}>OK</button>
  </div>
</div>

export default ErrorModal