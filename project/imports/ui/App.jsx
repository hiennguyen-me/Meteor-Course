import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import ListIntern from './List-intern';
import ListStats from './List-stats';
import Intern from './Intern';
import AccountsWrapper from './AccountsWrapper';

//import database - collection
import { Interns } from '../api/Interns';

const internTemp = {
  name: "Temp Intern",
  team: "Intern",
  Git: "V",
  Javascript: "V",
  NodeJS: "X",
  HTML: "X",
  Meteor: "X",
  React: "X",
  notes: "This a temporary intern",
};

export class App extends Component {
  constructor(props){
    super(props);

    //Setting up the state
    this.state = { currentIntern: internTemp};
    this.updateCurrentIntern = this.updateCurrentIntern.bind(this);
  }

  renderInterns() {
    return this.props.interns.map((intern) => {
         return <ListIntern key = {intern._id} intern = {intern} updateCurrentIntern={this.updateCurrentIntern}/>
    });
  }

  updateCurrentIntern(intern){
    this.setState({
      currentIntern: intern,
    });
  }

  render(){
    return(
      <MuiThemeProvider>
        <div className = "container">
          <AppBar
            title = "INTERSHIP"
            iconClassNameRight = "muidocs-icon-navigation-expand-more"
            showMenuIconButton = {false} >
            <AccountsWrapper />
          </AppBar>

          <div className = "row">
            <div className ="col s12 m7"><Intern intern ={this.state.currentIntern}/></div>
            <div className ="col s12 m5">
              <h2>Intership List </h2><Link to="/new" className="waves-effect waves-light btn">Add Intern</Link>
              <Divider />
              <List>
                {this.renderInterns()}
              </List>
              <Divider />
            </div>
            {/* <div className ="col s12 m5">
              <ListStats />
            </div> */}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  interns: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('interns');
  const user = Meteor.userId();

  return {
    interns: Interns.find({owner: user}, {sort: { name: 1}}).fetch(),
  };
}, App);
