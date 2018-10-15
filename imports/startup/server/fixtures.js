// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Posts } from '../../api/posts/posts.js';

// Meteor.posts.remove({});

Meteor.startup(() => {

    // if the Posts collection is empty
    if (Posts.find().count() === 0) {
        console.log('Posts\' count do indeed = 0')
        const data = [
            {
                _id: {
                    "$oid": "5bc50432e7179a4377f95975"
                },
                "title": "first test post",
                "date_created": "2018-10-14",
                "date_posted": "2018-10-15",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            }
        ];

        data.forEach(post => Posts.insert(post));
    }
});
