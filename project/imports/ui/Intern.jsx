import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900, lightBlue50 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Intern extends Component {
  render() {
    const intern = this.props.intern;
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={intern.name} subtitle="Intership at DSV company" />}
        >
          <img src="avatar.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip backgroundColor={blue200} style={styles.chip} >
              <Avatar size={32} color={lightBlue50} backgroundColor={blue900}>
                {intern.Git}
              </Avatar>
              Git
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip} >
              <Avatar size={32} color={lightBlue50} backgroundColor={blue900}>
                {intern.Javascript}
              </Avatar>
              Javascript
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip} >
              <Avatar size={32} color={lightBlue50} backgroundColor={blue900}>
                {intern.NodeJS}
              </Avatar>
              NodeJS
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip} >
              <Avatar size={32} color={lightBlue50} backgroundColor={blue900}>
                {intern.HTML}
              </Avatar>
              HTML
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip} >
              <Avatar size={32} color={lightBlue50} backgroundColor={blue900}>
                {intern.Meteor}
              </Avatar>
              Meteor
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip} >
              <Avatar size={32} color={lightBlue50} backgroundColor={blue900}>
                {intern.React}
              </Avatar>
              React
            </Chip>
          </div>
        </CardText>

        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
