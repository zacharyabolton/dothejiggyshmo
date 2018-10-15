import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts.js';

import { check } from 'meteor/check';
import { Match } from 'meteor/check';

Meteor.publish( 'searchresults', function( search ) {
  // Meteor._sleepForMs(5000);
  return Posts.findAll();
});
