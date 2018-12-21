import React, { Component, Fragment } from 'react';

const imgStyles = {height: "200px"}
export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <section id="catToAdopt">
          <header>
            {/*  {this.props.catToAdopt.name}
            {this.props.catToAdopt.picture} */}
            <h3>Scruffles</h3>
            <img style={imgStyles} src="https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg" alt="picture of scruffles" />
            <dl>
              <dt className="animal-details">About me</dt>
              <dd>I'm a cat</dd>
            </dl>
          </header>
        </section>
        <section id="dogToAdopt">
          <h3>Shnuffles</h3>
          <img style={imgStyles} src="https://s.hdnux.com/photos/62/05/55/13130569/9/920x920.jpg" />
          <dl>
            <dt className="animal-details">About me</dt>
            <dd>Am I a dog?</dd>
          </dl>
        </section>
      </Fragment>

    )
  }
}