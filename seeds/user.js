const { User } = require('../models');

const userdata =
[
  {
    "username": "Mohamed",
    "password": "Web2005"
  },
  {
    "username": "Ayan",
    "password": "Web2005"
  },
  {
    "username": "Jeff",
    "password": "Web2005"
  },
  {
    "username": "John",
    "password": "Web2005"
  },
  {
    "username": "Steve",
    "password": "Web2005"
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

