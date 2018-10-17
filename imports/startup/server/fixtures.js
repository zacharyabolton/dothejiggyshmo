// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Posts } from '../../api/posts/posts.js';

// Meteor.posts.remove({});

Meteor.startup(() => {

    // if the Posts collection is empty
    if (Posts.find().count() === 0) {
        const data = [
            {
                "title": "first test post",
                "slug": "first-test-post",
                "date_created": "2018-10-14",
                "date_posted": "2018-10-14",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "second test post",
                "slug": "second-test-post",
                "date_created": "2018-10-15",
                "date_posted": "2018-10-15",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "third test post",
                "slug": "third-test-post",
                "date_created": "2018-10-11",
                "date_posted": "2018-10-11",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "fourth test post",
                "slug": "fourth-test-post",
                "date_created": "2018-10-05",
                "date_posted": "2018-10-05",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "fifth test post",
                "slug": "fifth-test-post",
                "date_created": "2018-10-03",
                "date_posted": "2018-10-03",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "sixth test post",
                "slug": "sixth-test-post",
                "date_created": "2018-10-02",
                "date_posted": "2018-10-02",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "seventh test post",
                "slug": "seventh-test-post",
                "date_created": "2018-10-01",
                "date_posted": "2018-10-01",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "eighth test post",
                "slug": "eighth-test-post",
                "date_created": "2018-09-15",
                "date_posted": "2018-09-15",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "ninth test post",
                "slug": "ninth-test-post",
                "date_created": "2018-09-14",
                "date_posted": "2018-09-14",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "tenth test post",
                "slug": "tenth-test-post",
                "date_created": "2017-09-15",
                "date_posted": "2017-09-15",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "eleventh test post",
                "slug": "eleventh-test-post",
                "date_created": "2017-11-29",
                "date_posted": "2017-11-29",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            },
            {
                "title": "twelfth test post",
                "slug": "twelfth-test-post",
                "date_created": "1998-10-15",
                "date_posted": "1998-10-15",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
            }
        ];

        data.forEach(post => Posts.insert(post));
    }
});
