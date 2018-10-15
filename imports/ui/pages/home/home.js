import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Posts }  from '../../../api/posts/posts.js';

import './home.html';

Template.App_home.onCreated( () => {
    let template = Template.instance();

    template.autorun( () => {
        template.subscribe( 'allposts' );
    });
});

Template.App_home.helpers({
    posts() {
        let posts = Posts.find();
        if ( posts ) {
            return posts;
        }
    }
});
