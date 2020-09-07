import React, { Component } from 'react'
import PropTypes from 'prop-types'

import "./home.styles.scss"

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
