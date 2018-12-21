import React, { Component, Fragment } from 'react';
const imgStyles = { height: "200px" }
export default function Pet (props) {
    // console.log('props in pet.js', props)
    return (
      <section id={props.petToAdopt.name + '-' + props.petToAdopt.age}>
        <header>
          <h3 className="pet-name">{props.petToAdopt.pet.name}</h3>
          
        </header>
          <dl>
            <dt className="animal-details">About me</dt>
            <dd>I'm a {props.petType}</dd>
          </dl>
          <button id={props.petType + '-btn'} onClick={(e)=> props.onAdoptPet(e)}>Adopt</button>
      </section>
    )
}

{/* 
// <section id="dogToAdopt">
//   <h3>Shnuffles</h3>
//   <img style={imgStyles} src="https://s.hdnux.com/photos/62/05/55/13130569/9/920x920.jpg" />
//   <dl>
//     <dt className="animal-details">About me</dt>
//     <dd>Am I a dog?</dd>
//   </dl>
// </section> */}