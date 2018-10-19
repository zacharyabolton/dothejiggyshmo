import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './post.html';

Template.App_post.helpers({
    equals( a, b ) {
        return Object.keys(a)[0] === b;
    }
});
