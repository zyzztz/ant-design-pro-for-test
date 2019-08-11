import React, { Component, Fragment } from 'react';
import { Link, Redirect, Router } from 'dva/router';

export default class TestOne extends  Component {

  link = (event) => {
    event.preventDefault();
    const {router} =  Router;
    let history = router.history;
    let _this$props = this.props;
    let replace = _this$props.replace;

    let to = _this$props.to;

    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  }

  render() {
    return (
      <Fragment>
        <div>This is One Page</div>
        <div><Link to={{pathname: '/zytest/test2', query: {id: 1, no: 2}}}>跳转 query======》》》》</Link></div>
        <div><Link to={{pathname: '/zytest/test2', state: {id: 1, no: 2}}}>跳转 state======》》》》</Link></div>
        {/*<div><a href="/zytest/test2" replace={false}>跳转 replace======》》》》</a></div>*/}
        <div><a href="/zytest/test2" onClick={this.link}>跳转 history======》》》》</a></div>
        {/*<Redirect to="/zytest/test2" idno={1}>跳转 Redirect======》》》》</Redirect>*/}
      </Fragment>
    )
  }
}
