import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts.js';

import { check } from 'meteor/check';
import { Match } from 'meteor/check';

Meteor.publish( 'allposts', function( requestedDocNumber ) {
  Meteor._sleepForMs(5000);
  var oneBasedPostIndex, postIndex;
  // get total number of docs
  let numberposts = Posts.find().count()
  
  if ( Math.abs(requestedDocNumber) % numberposts == 0 ) {
    postIndex = numberposts - 1
  } else if ( requestedDocNumber > 0 ) {
    oneBasedPostIndex = requestedDocNumber % numberposts
    postIndex = oneBasedPostIndex - 1
  } else {
    oneBasedPostIndex = ( numberposts - (Math.abs(requestedDocNumber)% numberposts) ) % numberposts
    postIndex = oneBasedPostIndex - 1
  }
  console.log('requestedDocNumber is '+requestedDocNumber+', numberposts is '+numberposts+', postIndex is '+postIndex)
  let postToSend = Posts.find({}, {sort: {date_posted: -1}}).fetch()[postIndex];

  return Posts.find( postToSend );

});

Meteor.publish( 'onepost', function( slug ) {
  // Meteor._sleepForMs(5000);
  check( slug, Match.OneOf( String, null, undefined ) );

  return Posts.find({slug: slug});
});
