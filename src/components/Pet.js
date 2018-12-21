import React, { Component, Fragment } from 'react';
const imgStyles = { height: "200px" }
export default function Pet (props) {
    // console.log('props in pet.js', props)
    return (
      
      <section id={props.petToAdopt.pet.name + '-' + props.petToAdopt.pet.age}>
        <h2>{props.type}</h2>
        <header>
          <h3 className="pet-name">{props.petToAdopt.pet.name}</h3>
          
        </header>
          <img style={imgStyles} src={props.petToAdopt.pet.imageURL} alt={props.petToAdopt.pet.imageDescription}/>
          <dl>
            <dt className="animal-details">About me</dt>
            <dd className="details">I'm a {props.petToAdopt.pet.age} year old {props.petToAdopt.pet.breed}</dd>
            <dd className="story">{props.petToAdopt.pet.story}</dd>
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