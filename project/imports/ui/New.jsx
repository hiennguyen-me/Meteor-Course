import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { browserHistory } from 'react-router';
import { ListItem } from 'material-ui/List';

import { Interns } from '../api/Interns';

export default class New extends Component {
  submitIntern(event) {
    event.preventDefault();

    let intern = {
      name: this.refs.name.value,
      team: this.refs.team.value,
      Git: this.refs.Git.value,
      Javascript: this.refs.Javascript.value,
      NodeJS: this.refs.NodeJS.value,
      HTML: this.refs.HTML.value,
      Meteor: this.refs.Meteor.value,
      React: this.refs.React.value,
      notes: this.refs.notes.value,
      createAt : new Date(),
      owner: Meteor.userId(),
    };

    Meteor.call('insertIntern', intern, (error) => {
      if(error){
        alert("Can't insert intern" + error.reason);
      } else{
        alert("Intern added");
        browserHistory.push('/');
      }
    })

  }

  render() {
    return (
      <div className = "row">
        <form className = "col s12" onSubmit={this.submitIntern.bind(this)}>
          <h3> Add a new intern </h3>
          <div className = "row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Git</h5>
              <select className="browser-default" ref="Git">
                <option value="X">X - Not finished this course</option>
                <option value="V">V - Finished this course</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Javascript</h5>
              <select className="browser-default" ref="Javascript">
                <option value="X">X - Not finished this course</option>
                <option value="V">V - Finished this course</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <h5>NodeJS</h5>
              <select className="browser-default" ref="NodeJS">
                <option value="X">X - Not finished this course</option>
                <option value="V">V - Finished this course</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>HTML</h5>
              <select className="browser-default" ref="HTML">
                <option value="X">X - Not finished this course</option>
                <option value="V">V - Finished this course</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <h5>Meteor</h5>
              <select className="browser-default" ref="Meteor">
                <option value="X">X - Not finished this course</option>
                <option value="V">V - Finished this course</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>React</h5>
              <select className="browser-default" ref="React">
                <option value="X">X - Not finished this course</option>
                <option value="V">V - Finished this course</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
            </div>
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
