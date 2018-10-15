// Definition of the docs collection

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection( 'posts' );

Posts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Posts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
