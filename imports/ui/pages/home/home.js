import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Posts }  from '../../../api/posts/posts.js';

import './home.html';


Template.App_home.onCreated( () => {
    let template = Template.instance();

    // set the limit on posts to 1 initially
    template.requestedPostNumber = new ReactiveVar();
    template.requestedPostNumber.set(1)
    //

    // subsribe to one or all posts depending on
    // whether or not a slug is in the URL
    slug = Router.current().params.slug;
    if ( slug ) {
        template.autorun( () => {
            template.subscribe( 'onepost', slug );
        });
    } else {
        template.autorun( () => {
            console.log(template.requestedPostNumber.get())
            template.subscribe( 'allposts', template.requestedPostNumber.get() );
        });
    }
    //

    // // detect if scroll is happening at bottom of page
    // // in order to load next doc.
    // lastScrollTop = 0

    // $( window ).scroll( function( event ) {
        
    //     if ( $( window ).scrollTop() + $( window ).height() > $( document ).height() - 10 ) {
    //         // where we are in the page?
    //         var scrollTop = $(this).scrollTop();
    //         // console.log(new Date())
    //         if ( scrollTop > lastScrollTop ) {
    //             var requestedPostNumber = template.requestedPostNumber.get();
    //             template.requestedPostNumber.set(requestedPostNumber += 1)
    //             // console.log(template.requestedPostNumber.get())
    //             // console.log("going down at the bottom of the page");
    //         }
    //         lastScrollTop = scrollTop
    //     }
    //     console.log("window scrollTop is "+$( window ).scrollTop())
    //     console.log("window height is "+$( window ).height())
    //     console.log("document height is "+$( document ).height())
    //     console.log("scrollTop is "+scrollTop)
    //     console.log("lastScrollTop is "+lastScrollTop)
    // })
    // //

});

Template.App_home.helpers({
    posts() {
        let post = Posts.find({}) 
        if ( post ) {
            return post;
        } else {
            console.log('no post found!!!!!!')
        }
    }
});

Template.App_home.events({
    'click .glyphicon-chevron-down' (event, template) {
        let requestedPostNumber = template.requestedPostNumber.get();
        template.requestedPostNumber.set(requestedPostNumber += 1)
    },
    'click .glyphicon-chevron-up' (event, template) {
        let requestedPostNumber = template.requestedPostNumber.get();
        template.requestedPostNumber.set(requestedPostNumber -= 1)
    }
})