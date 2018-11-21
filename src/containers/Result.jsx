import React, { Component } from 'react'
import { connect } from 'react-redux';
import Message from '../components/Message';
import {
  updateRandomHouse,
  updateSpecificHouse,
  fetchHouses,
} from '../actions';

class Result extends Component {
  constructor(props) {
    super(props)
    this.count = 0;
    this.props.updateHouseList();
    setInterval(() => {
      this.count++;
      this.props.updateRandomCall()
    }, 1000)
  }

  render() {
    return (
      <div>
        {this.props.houses.housesList.map(house => <h5 key={house}>{house}</h5>)}
        <br />
        <Message message={this.props.houses.selectedHouse} />
      </div>
    )
  }
}

const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
  updateRandomCall: () => dispatch(updateRandomHouse()),
  updateSpecificCall: (id) => dispatch(updateSpecificHouse(id)),
  updateHouseList: () => dispatch(fetchHouses()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Result)
