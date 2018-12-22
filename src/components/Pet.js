import React from 'react';
const imgStyles = { height: '200px' };

export default function Pet(props) {
  let displayPet;

  const options = {
    dog: {
      greeting: 'Howdy! My name is ',
      allGoneImage:
        'https://www.rover.com/blog/wp-content/uploads/2015/06/happy-dog.jpg'
    },
    cat: {
      greeting: 'Hey There! My name is ',
      allGoneImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFFYpB2rUY4u91QXpUqQPodZ5K4NWge6GHOlRLqqMJzybHAi2'
    }
  };

  if (props.petToAdopt) {
    displayPet = (
      <section className="pet">
        <header>
          <h3 className="pet-name">
            {options[props.type].greeting}
            {props.petToAdopt.name}!
          </h3>
        </header>
        <img
          style={imgStyles}
          src={props.petToAdopt.imageURL}
          alt={props.petToAdopt.imageDescription}
        />
        <dl>
          <dt className="animal-details">Facts About Me</dt>
          <dd className="details">
            <span>Breed: </span> {props.petToAdopt.breed}
          </dd>
          <dd className="details">
            <span>Age: </span> {props.petToAdopt.age} years old
          </dd>
          <dd className="details">
            <span>Sex: </span> {props.petToAdopt.sex} 
          </dd>
          <dd className="details">
            <span>My Story: </span> {props.petToAdopt.story} 
          </dd>
        </dl>
        <button type="button" id={props.type + '-btn'} onClick={props.onAdopt}>
          Adopt
        </button>
      </section>
    );
  } else {
    displayPet = (
      <aside className="no-pet">
        <header>
          <h2 className="pet-name">All {props.type}s Have Found a Home!</h2>
        </header>
        <img
          style={imgStyles}
          src={options[props.type].allGoneImage}
          alt="All Pets have been adopted!"
        />
      </aside>
    );
  }

  return (
    <section className="pet">
      {displayPet}
    </section>
  );
}