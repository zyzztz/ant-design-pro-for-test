import React, { Component, Fragment } from 'react';
import ECharts from 'react-echarts';
import { Link, Redirect, Router } from 'dva/router';
import ReactJson from 'react-json-view'
import { Modal } from 'antd';

import {gson1, gson2, onEditGson, mock1, mock2} from './GsonContent';

export default class EchartsTest extends  Component {
  constructor(props) {
    super(props);
    console.log("constructor", props)
    this.state = {
      editJson: {},
      editFlag:false,
    };
  }

  showEdit = (gson) => {
    this.setState({editJson: gson, editFlag:true})
    console.log("editGson", JSON.stringify(gson))
  }
  saveEdit = () => {
    const { editJson } = this.state
    console.log("newGson", JSON.stringify(editJson))
  }

  render(){

    const g1 = [{request: {uri: "lu.com"}}]
    const g2 = [{"request": {"uri": "lu.com"}}]

    // JSON.parse(text)js
    // JSON.stringify(json)
    // editInputMinWidth
    return (
      <Fragment>
        <div>{JSON.stringify(gson2)}</div>
        <div>{gson1.size}</div>
        <div><a onClick={() => this.showEdit(gson1)}>第{1+1}个</a></div>
        {
          mock2.map((j, i) => <div key={`div_json_${i}`}><a onClick={(t) => this.showEdit(j)}>{`第${i+1}个,uri=[${j.request.uri}]`}</a></div>)
        }
        <Modal visible={this.state.editFlag} width='80%' onCancel={(e) => this.setState({editJson: {}, editFlag: false})}
            onOk={(e) => this.saveEdit()}>
          <ReactJson src={this.state.editJson} onEdit={(item) => {this.showEdit(item.updated_src);return true}} collapsed={false}
            />
        </Modal>
      </Fragment>
    )
  }
}
