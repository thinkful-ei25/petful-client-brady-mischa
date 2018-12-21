import React, { Component, Fragment } from 'react';
import Pet from './components/Pet';

export default class Dashboard extends Component {
  adopt = (e) => {
    console.log(e.target);
    console.log('clicked!')
  }
  render() {
    return (
      <Fragment>
        <Pet petType='cat' onAdoptPet={this.adopt}/>
        <Pet petType='dog' onAdoptPet={this.adopt}/>
      </Fragment>

    )
  }
}