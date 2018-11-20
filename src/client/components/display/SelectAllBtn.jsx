import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReqResCtrl from '../ReqResCtrl';

const SelectAllBtn = props => {
  return (<button type='button' onClick={ ReqResCtrl.selectAllResReq }>Select All</button>
  );
};

export default SelectAllBtn;