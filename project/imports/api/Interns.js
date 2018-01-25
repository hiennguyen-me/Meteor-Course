import { Mongo } from 'meteor/mongo';

export const Interns = new Mongo.Collection('interns');

Interns.allow({
  insert(){ return false; },
  update(){ return false; },
  remove(){ return false; },
});

Interns.deny({
  insert(){ return true; },
  update(){ return true; },
  remove(){ return true; },
});

const InternSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  Git: { type: String, defaultValue : 'X'},
  Javascript: { type: String, defaultValue : 'X'},
  NodeJS: { type: String, defaultValue : 'X'},
  HTML : { type: String, defaultValue : 'X'},
  Meteor : { type: String, defaultValue : 'X'},
  React : { type: String, defaultValue : 'X'},
  notes: { type: String , optional: true},
  owner: { type: String },
});

Interns.attachSchema(InternSchema);
