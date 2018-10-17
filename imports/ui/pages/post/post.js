import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

// import { Posts }  from '../../../api/posts/posts.js';

import './post.html';

Template.App_post.onCreated( () => {
    // let template = Template.instance();
    // slug = Router.current().params;
    // if ( slug ) {
    //     // template.autorun( () => {
    //     //     template.subscribe( 'allposts' );
    //     // });
    //     console.log('a slug has been detected!')
    // } else {
    //     // template.autorun( () => {
    //     //     template.subscribe( 'allposts' );
    //     // });
    // }
});

// Template.App_post.helpers({
//     posts() {
//         let posts = Posts.find();
//         if ( posts ) {
//             return posts;
//         }
//     }
// })