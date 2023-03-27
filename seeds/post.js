const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Sunny Skies",
    "postContent": "The sky is so clear and blue today",
    "userId": 1
    },
    {
    "postTitle": "Mountain View",
    "postContent": "I can see the whole city from up here",
    "userId": 1
    },
    {
    "postTitle": "Beach Day",
    "postContent": "The sand is so warm and the water is perfect",
    "userId": 2
    },
    {
    "postTitle": "Autumn Leaves",
    "postContent": "The colors are so beautiful this time of year",
    "userId": 3
    }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;