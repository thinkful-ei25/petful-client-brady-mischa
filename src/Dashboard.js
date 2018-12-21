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
    return e.target.id === 'cat-btn' ? this.props.dispatch(adoptCat()) : this.props.dispatch(adoptDog());
  }
  rerender() {
    console.log('props cat: ', this.props.cat)
    return (
      <Fragment>
        <h2>Cat</h2>
        <Pet type={'cat'} petToAdopt={this.props.cat} onAdoptPet={this.adopt}/>
        <h2>Dog</h2>
        <Pet type={'dog'} petToAdopt={this.props.dog} onAdoptPet={this.adopt}/>
      </Fragment>
    )
  }
  render(){
    if(this.props.cat.loading || this.props.dog.loading){
      return <h2>Finding your purrrrfect pet</h2>
    }else{
      return this.rerender();
    }
  }
}
const mapStateToProps = (state) => {
  return({
    cat: state.cat,
    dog: state.dog
  });
}
export default connect(mapStateToProps)(Dashboard);