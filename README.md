## Description

clone the repository and open the project folder.
Run the following commands

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

## Setup

- Install NodeJS, mongodb
- pull this repo
- update env with example.env
- run `npm start`

---

## Base URL

- ["API URL"]("https://zuri-stage-two-task.onrender.com/")

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

```
