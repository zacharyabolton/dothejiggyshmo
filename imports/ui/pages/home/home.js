import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Posts }  from '../../../api/posts/posts.js';

import './home.html';


Template.App_home.onCreated( () => {

    let template = Template.instance();

    template.requestedPostNumber = new ReactiveVar();
    template.requestedPostNumber.set(1)

    template.allposts = new ReactiveVar();
    template.allposts.set(true)

    template.slug = new ReactiveVar();
    template.slug.set(Router.current().params.slug)

    template.autorun( () => {
        if ( template.slug.get() ) {
            template.allposts.set(false)
                template.subscribe( 'onepost', template.slug.get() );
        } else {
            template.allposts.set(true)
                template.subscribe( 'allposts', template.requestedPostNumber.get() );
        }
    });

});

Template.App_home.helpers({
    posts() {
        let post = Posts.find({});
        if ( post ) {
            return post;
        } else {
            console.log('no post found!!!!!!')
        }
    },
    allposts() {
        return Template.instance().allposts.get();
    }
});

Template.App_home.events({
    'click .glyphicon-chevron-down' (event, template) {
        event.preventDefault();
        let requestedPostNumber = template.requestedPostNumber.get();
        template.requestedPostNumber.set(requestedPostNumber += 1)
    },
    'click .glyphicon-chevron-up' (event, template) {
        event.preventDefault();
        let requestedPostNumber = template.requestedPostNumber.get();
        template.requestedPostNumber.set(requestedPostNumber -= 1)
    },
    'click .return-home' ( event, template ) {
        event.preventDefault();
        Template.instance().slug.set();
        Template.instance().allposts.set(true);
        Template.instance().requestedPostNumber.set(1);
        Router.go('home')      
    }
})