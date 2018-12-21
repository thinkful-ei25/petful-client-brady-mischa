import React, { Component, Fragment } from 'react';
const imgStyles = { height: "200px" }
export default class Dashboard extends Component {
  render() {
    return (
      <section id={this.props.petToAdopt.name + '-' + this.props.petToAdopt.age}>
        <header>
          <h3 className="pet-name">{this.props.petToAdopt.name}</h3>
          
        </header>
          <dl>
            <dt className="animal-details">About me</dt>
            <dd>I'm a {this.props.petType}</dd>
          </dl>
          <button id={this.props.petType + '-btn'} onClick={(e)=> this.props.onAdoptPet(e)}>Adopt</button>
      </section>
    )
  }
}


// <section id="dogToAdopt">
//   <h3>Shnuffles</h3>
//   <img style={imgStyles} src="https://s.hdnux.com/photos/62/05/55/13130569/9/920x920.jpg" />
//   <dl>
//     <dt className="animal-details">About me</dt>
//     <dd>Am I a dog?</dd>
//   </dl>
// </section>