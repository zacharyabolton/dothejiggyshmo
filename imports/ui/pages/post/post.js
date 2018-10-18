import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './post.html';

// Template.App_post.onCreated( () => {

//     let template = Template.instance();

//     template.paragraphNumber = new ReactiveVar();
//     template.requestedPostNumber.set(-1)

//     template.autorun( () => {

//     });

// });

Template.App_post.helpers({
    // arrayify( obj ) {
    //     var result = [];
    //     var paragraphs = []
    //     for (var key in obj) {
    //         if ( Number.isInteger(key) ) {
    //             result.push({name:key,value:undefined});
    //             paragraphs.push(obj[key])
    //         }
    //         result.push({name:key,value:obj[key]});
    //     }
    //     result.push({name:"paragraphs",value:paragraphs})
    //     return result;
    // },
    equals( a, b ) {
        return Object.keys(a)[0] === b;
    }
});
