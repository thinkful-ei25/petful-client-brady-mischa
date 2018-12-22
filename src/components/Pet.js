import React from 'react';
import SmoothImage from 'react-smooth-image';
const imgStyles = { height: '100%', width: '100%' };
const styles = {
  width: '100%',
  height: '250px',
  overflow: 'inherhit',
  paddingBottom: '5px',
  position: 'relative'
};

export default function Pet(props) {
  const options = {
    dog: {
      greeting: 'Howdy! My name is ',
      allGoneImage: 'https://media.giphy.com/media/yCgahYUO90Xbq/giphy.gif'
    },
    cat: {
      greeting: 'Hey There! My name is ',
      allGoneImage: 'https://media.giphy.com/media/uI1wAzSiJN3Rm/giphy.gif'
    }
  };

  // const isLoading 

  const displayPet = (props.petToAdopt && !props.loading) ? (
    <div className="card withShadow leaderBoardCard">
      <header>
        <h3 className="section-title">
          {options[props.type].greeting}
          {props.petToAdopt.name}!
        </h3>
      </header>
      <div className="image">
        <SmoothImage
          src={props.petToAdopt.imageURL}
          alt={props.petToAdopt.imageDescription}
          imageStyles={imgStyles}
          containerStyles={styles}
        />
      </div>
      <dl className="pet-details">
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
      <button
        type="button"
        id={props.type + '-btn'}
        className="button"
        onClick={props.onAdopt}
      >
        Adopt Me!
      </button>
    </div>
  ) : (
    <div className="cardPet withShadow leaderBoardCard">
      <aside className="no-pet">
        <header>
          <h3 className="section-title">
            All {props.type}s Have Found a Home!
          </h3>
        </header>
        <SmoothImage
          src={options[props.type].allGoneImage}
          alt="All Pets have been adopted!"
          imageStyles={imgStyles}
          containerStyles={styles}
        />
      </aside>
    </div>
  );

  return <div className="pet">{displayPet}</div>;
}
