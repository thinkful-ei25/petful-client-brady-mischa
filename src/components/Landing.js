import React, { Component } from 'react';
import Dashboard from './Dashboard';
import '../index.css';

class Landing extends Component {
  render() {
    return (
      <div className="layout">
        <div className="layout">
          <div className="layout-content">
            <div className="main-content">
              <h1 className="sub-title">
                Making Humans Better One Adopted Pet At a Time!
              </h1>
              <p className="description">
                Pet adoption is quickly becoming the go to way to find a new
                dog, puppy, cat or kitten. Why? Because the benefits are
                endless. Not only is it the most affordable option, but there is
                no greater joy than bringing an adopted pet into your life. You
                will find that it only makes you better in the end!
              </p>
              <p>
                Below you will see the pets we have for adoption. We always
                strive to find a great home for our pets, and feel that it's
                best to limit the available pets to those that have been here
                the longest. So once you spot your future best friend, click
                that adopt button and bring the fella home with you!
              </p>
              <Dashboard />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
