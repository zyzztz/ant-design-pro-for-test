import React, { Component, Fragment } from 'react';

export default class TestTwo extends  Component {


  render() {
    const loc = this.props.location;
    console.log("Link",loc,this.pros)
    return (
      <Fragment>
        <div>This is Two Page</div>
        {
          loc.query ? (
            <div>
              <h4>query:</h4>
              <div>id: {loc.query.id ? loc.query.id : -1}</div>
            </div>
          ) : null
        }
        {
          loc.search ? (
            <div>
              <h4>search:</h4>
              <div>id: {loc.search.id ? loc.search.id : -1}</div>
            </div>
          ) : null
        }
        {
          loc.state ? (
            <div>
              <h4>state:</h4>
              <div>id: {loc.state.id ? loc.state.id : -1}</div>
            </div>
          ) : null
        }
      </Fragment>
    )
  }
}
