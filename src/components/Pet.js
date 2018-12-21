import React, { Component, Fragment } from 'react';
const imgStyles = { height: "200px" }


export default function Pet (props) {
    return (
      <section id={props.petToAdopt.pet.name + '-' + props.petToAdopt.pet.age}>
        <header>
          <h3 className="pet-name">{props.petToAdopt.pet.name}</h3>
          
        </header>
          <img style={imgStyles} src={props.petToAdopt.pet.imageURL} alt={props.petToAdopt.pet.imageDescription}/>
          <dl>
            <dt className="animal-details">About me</dt>
            <dd className="details">I'm a {props.petToAdopt.pet.age} year old {props.petToAdopt.pet.breed}</dd>
            <dd className="story">{props.petToAdopt.pet.story}</dd>
          </dl>
          <button id={props.type.toLowerCase() + '-btn'} onClick={(e)=> props.onAdoptPet(e)}>Adopt</button>
      </section>
    )
}