import React, { Component, Fragment } from 'react';
const imgStyles = { height: "200px" }
export default class Dashboard extends Component {
  render() {
    return (
      <section id={this.props.petType + "ToAdopt"}>
        <header>
          <h3>Scruffles</h3>
          <img style={imgStyles} src="https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg" alt="picture of scruffles" />
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