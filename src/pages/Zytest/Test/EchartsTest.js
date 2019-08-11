import React, { Component, Fragment } from 'react';
import ECharts from 'react-echarts';
import { Link, Redirect, Router } from 'dva/router';
import ReactJson from 'react-json-view'
import { Modal } from 'antd';

import {gson1, gson2, mock1, mock2} from './GsonContent';

export default class EchartsTest extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      editJson: {},
      editFlag:false,
    };
  }

  showEdit = () => {
    this.setState({editJson: mock1[0], editFlag:true})
    console.log(this.state)
  }

  render(){

    const g1 = [{request: {uri: "lu.com"}}]
    const g2 = [{"request": {"uri": "lu.com"}}]
//    console('gson1',gson1.size)
    /**
    JSON.parse(text)js
    JSON.stringify(json)
    **/

    return (
      <Fragment>
        <div>{JSON.stringify(gson2)}</div>
        <div>{gson1.size}</div>
        <div><a onClick={() => this.showEdit()}>第{1+1}个</a></div>
        {
          mock2.map((j, i) => <div><a onClick={(t) => this.setState({editJson: j, editFlag:true})}>{`第${i+1}个,uri=[${j.request.uri}]`}</a></div>)
        }
        <Modal visible={this.state.editFlag} width='80%' onCancel={(e) => this.setState({editJson: {}, editFlag: false})}>
          <ReactJson src={this.state.editJson} onEdit={(edit) => {return true}} collapsed={false}/>
        </Modal>
      </Fragment>
    )
  }
}
