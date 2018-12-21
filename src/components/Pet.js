import React, { Component, Fragment } from 'react';
import { fetchCat, fetchDog, adoptCat, adoptDog } from '../actions';
import { connect } from 'react-redux';
const imgStyles = { height: "200px" }


export class Pets extends Component {
  componentDidMount() {
      this.props.dispatch(fetchCat());
      this.props.dispatch(fetchDog());
    
  }

  adopt = (e) => {
    return e.target.id === 'cat-btn' ? this.props.dispatch(adoptCat()) : this.props.dispatch(adoptDog());
  }

  createCol() {
    if(this.props.types !== null & !this.props.loading) {
      return this.props.types.map((val, index) => {
        let lowercase = val.toLowerCase();
        return (
        <div className='col-6' id={this.props[lowercase].pet.name + '-' + this.props[lowercase].pet.age + '-' + index} >
        <h2>Adopt a {val} Today!</h2>
        <header>
          <h3 className='pet-name'>Hi! I'm {this.props[lowercase].pet.name}!</h3>
        </header>
        <img style={imgStyles} src={this.props[lowercase].pet.imageURL} alt={this.props[lowercase].imageDescription} />
            <dl>
              <dt className="animal-details">About me</dt>
              <dd className="details">I'm a {this.props[lowercase].pet.age} Year Old, {this.props[lowercase].pet.sex}, {this.props[lowercase].pet.breed}</dd>
              <dd className="story">{this.props[lowercase].pet.story}</dd>
            </dl>
            <button id={lowercase + '-btn'} onClick={(e) => this.adopt(e)}>Adopt</button>
        </div>
      )
      })
    }
  }

  rerender() {
    return(
      <section>
      {this.createCol()}
      </section>
    )
  }

  render(){
    if(this.props.loading) {
      return <h2>Finding your purrrrfect pet</h2>
    } else {
      return this.rerender();
    }
  }
}

const mapStateToProps = (state, props) => {
  return({
  type: props.type,
  cat: state.cat,
  dog: state.dog,
  loading: (props.type === 'cat') ? state.cat.loading : state.dog.loading
  })
}

export default connect(mapStateToProps)(Pets);
