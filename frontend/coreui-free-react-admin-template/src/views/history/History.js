import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from './style'

import Parse from '../../parse-init.js'

import Histories from './Histories.js'

export default class History extends Component {

  render() {
    return (
      <div className="App">

        <Histories />

      </div>
    )
  }
}
