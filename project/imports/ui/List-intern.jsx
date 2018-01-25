import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default class ListIntern extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps");
  //
  //   console.log(nextProps);
  //
  // }

  updateCurrentIntern(intern){
    this.props.updateCurrentIntern(intern);
  }
  render() {
    if (!this.props.intern) {
      return null;
    }
    return (
      <ListItem
        primaryText = {this.props.intern.name}
        leftAvatar = {<Avatar src='avatar.jpg' />}
        onClick = {this.updateCurrentIntern.bind(this, this.props.intern)} />
    )
  }
}
