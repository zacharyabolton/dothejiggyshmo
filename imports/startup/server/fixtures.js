// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Posts } from '../../api/posts/posts.js';

// Posts.remove({});

Meteor.startup(() => {

    // if the Posts collection is empty
    if (Posts.find().count() === 0) {
        const data = [
            {
                "title": "first test post",
                "subtitle": "or how I built a blog.",
                "slug": "first-test-post",
                "date_created": "2017-09-13",
                "date_posted": "2017-09-13",
                "content": [
                    {"paragraph": {
                        "paragraph": "Lorem ipsum dolor sit amet, www.kidchess.com consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. dothejiggyshmo.com Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum.",
                        "header": "Garbage"
                    }},
                    {"quote": {
                        "quote": "To be or not to be, that is the question",
                        "attribution": "Hamlet"
                    }},
                    {"paragraph": {
                        "paragraph": "Cras pretium elit vitae ligula sagittis, sed finibus orci tincidunt. Cras consequat eu urna in dignissim. Morbi accumsan vehicula ultrices. Proin fermentum in quam eget congue. Aenean vitae nunc dignissim, molestie tellus eu, commodo ante. Suspendisse sagittis vestibulum sapien, a fringilla odio eleifend ut."
                    }},
                    {"image": {
                        "src": "example.jpg",
                        "max_width": 600,
                        "alt": "some random alt text"
                    }},
                    {"paragraph": {
                        "paragraph": "yo bro. Do the jiggy shmo. https://www.google.com",
                        "header": "finish"
                    }}
                ]
            },
            {
                "title": "Second test post",
                "subtitle": "Or how I improved a blog",
                "slug": "second-test-post",
                "date_created": "2018-09-13",
                "date_posted": "2018-09-13",
                "content": [
                    {"paragraph": {
                        "paragraph": "Lorem ipsum dolor sit amet, www.kidchess.com consectetur adipiscing elit. Etiam euismod, augue nec sodales imperdiet, quam lorem faucibus lectus, eget posuere arcu justo imperdiet justo. dothejiggyshmo.com Pellentesque quis mollis sapien. Proin pretium feugiat tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ut diam arcu. In ex lorem, suscipit id posuere in, hendrerit sed mauris. Donec at placerat tortor. Nulla sit amet nibh risus. Fusce id aliquet libero. Nullam sollicitudin, nunc ut malesuada semper, est felis semper risus, at accumsan risus urna eu nisl. Ut mattis metus non nisi venenatis, sed consequat nunc dignissim. Proin non tempus leo. Duis eleifend sodales gravida. Fusce nec justo sed lorem viverra viverra. Mauris pulvinar erat nec tempus interdum."
                    }},
                    {"image": {
                        "src": "example2.jpg",
                        "max_width": 6000,
                        "alt": "This is a relavent image to what I'm talking about, which is nothing..."
                    }},
                    {"paragraph": {
                        "paragraph": "As they say, \"I felt like saying 'as they say'.\" Check out www.google.com while you're at it."
                    }},
                    {"quote": {
                        "quote": "I felt like saying as they say.",
                        "attribution": "Nobody"
                    }},
                    {"paragraph": {
                        "paragraph": "Cras pretium elit vitae ligula sagittis, sed finibus orci tincidunt. Cras consequat eu urna in dignissim. Morbi accumsan vehicula ultrices. Proin fermentum in quam eget congue. Aenean vitae nunc dignissim, molestie tellus eu, commodo ante. Suspendisse sagittis vestibulum sapien, a fringilla odio eleifend ut."
                    }},
                    {"image": {
                        "src": "example3.jpg",
                        "max_width": 400,
                        "alt": "Cute, right?"
                    }},
                    {"paragraph": {
                        "paragraph": "yo bro. Do the jiggy shmo. https://www.google.com",
                        "header": "In conclusion"
                    }}
                ]
            }
        ];

        data.forEach(post => Posts.insert(post));
    }
});
