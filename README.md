<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

**_ HNG internship API project stage two task _**

---

## Requirements

    1. Users should have a first_name, last_name, email, password, (you can add other attributes you want to store about the user)
    2. A user should be able to sign up and sign in into the blog app
    3. Use JWT as authentication strategy and expire the token after 1 hour
    4. A blog can be in two states; draft and published
    5. Logged in and not logged in users should be able to get a list of published blogs created
    6. Logged in and not logged in users should be able to to get a published blog
    7. Logged in users should be able to create a blog.
    8. When a blog is created, it is in draft state
    9. The owner of the blog should be able to update the state of the blog to published
    10.  The owner of a blog should be able to edit the blog in draft or published state
    11.  The owner of the blog should be able to delete the blog in draft or published state
    12. The owner of the blog should be able to get a list of their blogs.
        a. The endpoint should be paginated
        b. It should be filterable by state
    13. Blogs created should have title, description, tags, author, timestamp, state, read_count, reading_time and body.
    14. The list of blogs endpoint that can be accessed by both logged in and not logged in users should be paginated,
        a. default it to 20 blogs per page.
        b. It should also be searchable by author, title and tags.
        c. It should also be orderable by read_count, reading_time and timestamp
    15. When a single blog is requested, the api should return the user information(the author) with the blog. The read_count of the blog too should be updated by 1
    16. Come up with any algorithm for calculating the reading_time of the blog.
    17. Write tests for all endpoints
    18. Test application

---

## Setup

- Install NodeJS, mongodb
- pull this repo
- update env with example.env
- run `npm start`

---

## Base URL

- https://drab-rose-slug-wrap.cyclic.app/

## Documentation

["PostMan Documentation"]("https://documenter.getpostman.com/view/10483274/2s9YC4TY5F")

## Models

---

### User

| field      | data_type | constraints |
| ---------- | --------- | ----------- |
| id         | string    | required    |
| name       | string    | required    |
| email      | string    | optional    |
| gender     | string    | optional    |
| occupation | string    | optional    |

## APIs

---

### Create User

- Route: /api/users
- Method: POST
- Body:

```
{
"name" :"Ndubuisi Ollawa",
"occupation":"Unemployed",
"email":"ndollawa@yahoo.com",
"gender":"male"
}

```

- Responses

Success

```
{
    message: 'New user ndollawa@yahoo.com created!',

}
```

---

### Get User

- Route: /api/users/:user_id
- Method: GET

- Responses

Success

```
{
    "_id": "6500f89a0ab5917ca3438295",
    "name": "Ndubuisi Ollawa",
    "email": "ndollawaa@gmail.com",
    "gender": "male",
    "occupation": "Unemployed",
    "createdAt": "2023-09-12T23:47:38.177Z",
    "updatedAt": "2023-09-12T23:47:38.177Z"
}

```

---

### Update User

- Route: /api/users/:user_id
- Method: PATCH
- Body:

```
{
    "name": "Ndubuisi O.",
    "email": "ndollawaa@gmail.com",
    "gender": "male",
    "occupation": "Employed"
}

```

- Responses

Success

```
{
        "_id": "6500f8b50ab5917ca3438299",
        "name": "Ndubuisi O.",
        "email": "ndollawa@yahoo.com",
        "gender": "male",
        "occupation": "Employed",
        "createdAt": "2023-09-12T23:48:05.014Z",
        "updatedAt": "2023-09-12T23:49:45.265Z"
    }

```

### Delete User

- Route: /api/users/:id
- Method: DELETE
- Body:

```


- Responses

Success

```

true

```

### Get All Users

- Route: /api/users
- Method: GET

```

```

- Responses

Success

```

[
{
"_id": "6500f89a0ab5917ca3438295",
"name": "Ndubuisi Ollawa",
"email": "ndollawaa@gmail.com",
"gender": "male",
"occupation": "Unemployed",
"createdAt": "2023-09-12T23:47:38.177Z",
"updatedAt": "2023-09-12T23:47:38.177Z"
},
{
"_id": "6500f8b50ab5917ca3438299",
"name": "Ndubuisi O.",
"email": "ndollawa@yahoo.com",
"gender": "male",
"occupation": "Employed",
"createdAt": "2023-09-12T23:48:05.014Z",
"updatedAt": "2023-09-12T23:49:45.265Z"
}
]

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

```

```

```
#   Z u r i - s t a g e - t w o  
 