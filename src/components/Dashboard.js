import React, { Component, Fragment } from 'react';
import Pet from './Pet';
import { connect } from 'react-redux';
import { fetchCat, fetchDog, adoptCat, adoptDog } from '../actions';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCat();
    this.props.fetchDog();
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-6">
            <h2>Checkout Our Dogs!</h2>
            <Pet
              className="adopt-pet"
              type="dog"
              petToAdopt={this.props.dog}
              onAdopt={this.props.onAdoptDog}
              loading={this.props.isDogLoading}
            />
          </div>
          <div className="col-6">
            <h2>Adopt a Friendly Cat</h2>
            <Pet
              className="adopt-pet"
              type="cat"
              petToAdopt={this.props.cat}
              onAdopt={this.props.onAdoptCat}
              loading={this.props.isCatLoading}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  onAdoptDog: adoptDog,
  onAdoptCat: adoptCat,
  fetchDog,
  fetchCat
};

const mapStateToProps = state => ({
  isDogLoading: state.dog.loading,
  isCatLoading: state.cat.loading,
  dog: state.dog.pet,
  cat: state.cat.pet
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
