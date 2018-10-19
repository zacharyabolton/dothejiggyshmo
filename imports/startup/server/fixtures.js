// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Posts } from '../../api/posts/posts.js';

// Posts.remove({});

Meteor.startup(() => {

    // if the Posts collection is empty
    if (Posts.find().count() === 0) {
        const data = [
            {
                "title": "Hello World",
                "keywords": "test, post",
                "description": "a test post for dothejiggyshmo.com",
                "author": "Zac Bolton",
                "subtitle": "My first blog post",
                "slug": "hello-world",
                "date_created": "2018-10-18",
                "date_posted": "2018-10-18",
                "content": [
                    {
                        "paragraph": {
                            "paragraph": "Hello world. Or, at least at this moment, hello no-one. This is my blog, a.k.a. a fancy way for me to talk to myself. My name is Zac. I enjoy coding, politics, social issues, reading, science, and tech among other things. This particular post is mainly a test to make sure everything on the site is working and looks good."
                        }
                    },
                    {
                        "paragraph": {
                            "paragraph": "Here\u2019s a picture of me and my wife:"
                        }
                    },
                    {
                        "image": {
                            "src": "https://s3.amazonaws.com/dothejiggyshmo-bucket/13735050_309259902741608_4065521869643816805_o+copy.jpg",
                            "max_width": 300,
                            "alt": "Handsome couple, eh?"
                        }
                    },
                    {
                        "paragraph": {
                            "paragraph": "I\u2019ve implemented some features for this blog such as quote emphasis/decoration; so how about I share a quote to test that out?"
                        }
                    },
                    {
                        "quote": {
                            "quote": "As long as I live under the capitalistic system, I expect to have my life influenced by the demands of moneyed people. But I will be damned if I propose to be at the beck and call of every itinerant scoundrel who has two cents to invest in a postage stamp.",
                            "attribution": "William Faulkner's letter of resignation from the US Postal Service."
                        }
                    },
                    {
                        "paragraph": {
                            "paragraph": "What d\u2019ya think? I chose this quote because I heard it recently in a VlogBrothers video and thought it was just lovely. (https://www.youtube.com/watch?v=tBmjLEq9-1k) Also, it allows me to share aforepasted quote in order to test my auto-linking feature for this blog."
                        }
                    },
                    {
                        "paragraph": {
                            "paragraph": "Okay so I\u2019m gonna start wrapping this up. Let\u2019s see how a full sized image looks:"
                        }
                    },
                    {
                        "image": {
                            "src": "https://s3.amazonaws.com/dothejiggyshmo-bucket/drill-3702674_1280.jpg ",
                            "max_width": 6000,
                            "alt": "Ooh, Nice drill bit! Thanks to pixabay and Lars_Nissen_Photoart for providing this image under a creative commons license (https://pixabay.com/photo-3702674/)"
                        }
                    },
                    {
                        "paragraph": {
                            "header": "Final thoughts",
                            "paragraph": "I don\u2019t actually have any final thoughts. I'm just testing out the heading feature. Well, I guess that\u2019s it. Tchau for now!"
                        }
                    }
                ]
            }
        ];

        data.forEach(post => Posts.insert(post));
    }
});
