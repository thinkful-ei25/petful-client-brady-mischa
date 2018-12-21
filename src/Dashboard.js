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
    console.log(e.target);

    console.log('clicked!')
  }
  rerender() {
    console.log('props cat: ', this.props.cat)
    return (
      <Fragment>
        <Pet type={'Cat'} petToAdopt={this.props.cat} onAdoptPet={this.adopt}/>
        <Pet type={'Dog'} petToAdopt={this.props.dog} onAdoptPet={this.adopt}/>
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
  console.log(state.cat.loading);
  return({
    cat: state.cat,
    dog: state.dog
  });
}
export default connect(mapStateToProps)(Dashboard);