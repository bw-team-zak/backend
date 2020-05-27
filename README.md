# Backend
API Documentation
BASE URL: https://med-cabinet1.herokuapp.com

Attach endpoints to the end of the base URL in order to make HTTP Requests.
Table of Contents
User registration and login

|Requests|Endpoints|Description|
|---|---|---|
|POST Users Registration|/api/users/register|POST request to register new user|
|POST Users Login|/api/users/login|POST request to login new user|
|GET Users|/api/users|GET request to get all users|
|PUT Users|/api/users/:id| PUT request to update/add user info|

**[POST] Registration for Users**

URL: https://med-cabinet1.herokuapp.com/api/users/register

**Request body should include:**
|Input|Input Type|
|---|---|
|username (required)|string|
|password (required)|string|
|med_condition|string|
|age|integer|
|experienced|boolean|

An example of how the body should appear:
```
{
    "username": "allen",
    "password": "1234",
    "med_condition": "glaucoma",
    "age": 32,
    "experienced: true
}
```
You will recieve all of the user's information including info from the feedback form which should be null.
```
{
    "id": 3,
    "username": "allen",
    "med_condition": "glaucoma",
    "age": 32,
    "experienced: true,
    "medical": "null",
    "race": "null",
    "positive": "null",
    "negative": "null"
}
```
**[POST] Login for Users**

URL: https://med-cabinet1.herokuapp.com/api/users/login

**Request body should include:**
|Input|Input Type|
|---|---|
|username (required)|string|
|password (required)|string|

An example of how the body should appear:
```
{
    "username": "allen",
    "password": "1234"
}
```

**What will be returned:**
You will recieve the user id, username and a JWT.
```
{
    "id": 3,
    "username": "allen",
    "message" : "Welcome allen!",
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU5MDUxNzcwNn0.oApQinTQPd2YuihjsSwk9WnMna6CfI95kx6rxh0-Jg4"
}
```
**[GET] Get Info for ALL Users**

URL: https://med-cabinet1.herokuapp.com/api/users

**What will be returned:**
You will recieve an array of user objects with all their info.
```
[
    {
        "id": 1,
        "username": "james",
        "med_condition": null,
        "age": null,
        "experienced": null
        "medical": "null",
        "race": "null",
        "positive": "null",
        "negative": "null"        
    },
    {
        "id": 2,
        "username": "rose",
        "med_condition": null,
        "age": null,
        "experienced": null
        "medical": "null",
        "race": "null",
        "positive": "null",
        "negative": "null"
    },
    {
        "id": 3,
        "username": "allen",
        "med_condition": "glaucoma",
        "age": 32,
        "experienced": true
        "medical": "Insomnia",
        "race": "hybrid",
        "positive": "Euphoric",
        "negative": "Paranoid"
    }
]
```

**[PUT] Update info for User based on the User's Id**

URL: https://med-cabinet1.herokuapp.com/api/users/:id

**Request body should but doesn't have to include:**
|Input|Input Type|
|---|---|
|race|string|
|medical|string|
|positive|string|
|negative|string|
|flavors|string|

An example of how the body should appear:
```
{
    "race": "hybrid",
    "medical": "Insomnia",
    "positive: "Euphoric",
    "negative: "Paranoid"
}
```

**What will be returned:**
You will recieve the user object that was updated with user's info.
```
    {
        "id": 3,
        "username":"allen",
        "med_condition": "glaucoma",
        "age": 32,
        "experienced": true,
        "race": "hybrid",
        "medical": "Insomnia",
        "positive: "Euphoric",
        "negative: "Paranoid"
    }

```
