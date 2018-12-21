import React, { Component, Fragment } from 'react';
import Pet from './components/Pet';
import {connect} from 'react-redux';
import {fetchCat, fetchDog, adoptCat, adoptDog} from './actions';

export class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  adopt = (e) => {
    console.log(e.target);

    console.log('clicked!')
  }
  render() {
    return (
      <Fragment>
        <Pet petToAdopt={this.props.cat} onAdoptPet={this.adopt}/>
        <Pet petToAdopt={this.props.dog} onAdoptPet={this.adopt}/>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return({
    cat: state.cat,
    dog: state.dog
  });
}
export default connect(mapStateToProps)(Dashboard);