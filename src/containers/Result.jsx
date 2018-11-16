import React, { Component } from 'react'
import { connect } from 'react-redux';
import Message from '../components/Message';

class Result extends Component {
  constructor(props) {
    super(props)
    setInterval(() => this.props.dispatch({ type: '' }), 1000)
  }

  render() {
    return (
      <div>
          {this.props.houses.map(house => <h5 key={house}>{house}</h5>)}
        <br />
        <Message message={this.props.selectedHouse} />
      </div>
    )
  }
}

export default connect(store => store)(Result)