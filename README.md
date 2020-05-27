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

**[POST] Registration for User**

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
    "username": "dopey",
    "password": "1234",
    "med_condition": "glaucoma",
    "age": 32,
    "experienced: true
}
```
You will recieve the user id, username, med condition, age, and experience.
```
{
    "id": 3,
    "username": "dopey",
    "med_condition": "glaucoma",
    "age": 32,
    "experienced: true
}
```
**[POST] Login for User**

URL: https://med-cabinet1.herokuapp.com/api/users/login

**Request body should include:**
|Input|Input Type|
|---|---|
|username (required)|string|
|password (required)|string|

An example of how the body should appear:
```
{
    "username": "dopey",
    "password": "1234"
}
```

**What will be returned:**
You will recieve the user id, username and a JWT.
```
{
    "id": 3,
    "username": "dopey",
    "message" : "Welcome dopey!",
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTU5MDUxNzcwNn0.oApQinTQPd2YuihjsSwk9WnMna6CfI95kx6rxh0-Jg4"
}
```