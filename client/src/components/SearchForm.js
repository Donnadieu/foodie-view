import React, { Component } from 'react'
import * as actionCreators from '../actions/actionCreators'

export default class SearchForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      zip_code: ''
    }
  }
}
