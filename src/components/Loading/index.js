import React, { Component, PropTypes } from 'react';

import LoadingIcon from '../../images/sun_loader.gif'

import './index.scss';

export default class Loading extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.active &&
      <div className="col-sm-12 loading" style={{textAlign: "center"}}>
        <img src={LoadingIcon} width={100}/>
      </div>
    );
  }
}
