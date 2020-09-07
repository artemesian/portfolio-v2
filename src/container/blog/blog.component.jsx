import React, { Component } from 'react'
import PropTypes from 'prop-types'

import "./blog.styles.scss"

export default class Blog extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        Blog
      </div>
    )
  }
}
