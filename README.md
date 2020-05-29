# Backend
API Documentation
BASE URL: https://med-cabinet1.herokuapp.com

Attach endpoints to the end of the base URL in order to make HTTP Requests.

**Table of Contents:**

User registration and login,

User get and update,

Strain get and delete

|Requests|Endpoints|Description|
|---|---|---|
|POST Users Registration|/api/users/register|POST request to register new user|
|POST Users Login|/api/users/login|POST request to login new user|
|GET Users|/api/users|GET request to get all users|
|PUT Users|/api/users/:id|PUT request to update/add user info|
|GET Strains|/api/strains|GET request to get all strains|
|DELETE Strains|/api/strains/:id|DELETE request to delete a strain|

**[POST] Registration for Users**

URL: https://med-cabinet1.herokuapp.com/api/users/register

**Request body should include:**
|Input|Input Type|
|---|---|
|username (required)|string|
|password (required)|string|
|age|integer|
|experienced|boolean|
|location|string|

An example of how the body should appear:
```
{
    "username": "allen",
    "password": "1234",
    "age": 32,
    "experienced": true,
    "location": "Boston"
}
```
You will recieve all of the user's information including info from the feedback form which should be null.
```
{
    "id": 3,
    "username": "allen",
    "age": 32,
    "experienced: true,
    "location": "Boston",
    "race": "null",
    "symptoms": "null",
    "flavor": "null"
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
        "age": null,
        "experienced": null,
        "location": null,
        "race": null,
        "symptoms": null,
        "flavor": null
    },
    {
        "id": 2,
        "username": "rose",
        "age": null,
        "experienced": null,
        "location": null,
        "race": {
            "race1": "false",
            "race2": "false",
            "race3": "false"
        },
        "symptoms": {
            "pain": "false",
            "other": "false",
            "nausea": "false",
            "stress": "false",
            "fatigue": "false",
            "seizure": "false",
            "insomnia": "false",
            "eyePressure": "false",
            "muscleSpasm": "false",
            "inflammation": "false",
            "lackOfAppetite": "false"
        },
        "flavor": {
            "pine": "false",
            "minty": "false",
            "nutty": "false",
            "spicy": "false",
            "sweet": "false",
            "citrus": "false",
            "earthy": "false",
            "herbal": "false",
            "pungent": "false"
        }
    },
    {
        "id": 3,
        "username": "allen",
        "age": 32,
        "experienced": true,
        "location": "Boston",
        "race": {
            "race1": false,
            "race2": false,
            "race3": false
        },
        "symptoms": {
            "pain": false,
            "other": false,
            "nausea": false,
            "stress": false,
            "fatigue": false,
            "seizure": false,
            "insomnia": false,
            "eyePressure": false,
            "muscleSpasm": false,
            "inflammation": false,
            "lackOfAppetite": false
        },
        "flavor": {
            "pine": false,
            "minty": false,
            "nutty": false,
            "spicy": false,
            "sweet": false,
            "citrus": false,
            "earthy": false,
            "herbal": false,
            "pungent": false
        }
    },
]
```

**[PUT] Update info for User based on the User's Id**

URL: https://med-cabinet1.herokuapp.com/api/users/:id

**Request body should but doesn't have to include:**
|Input|Input Type|
|---|---|
|race|object|
|symptom|object|
|flavor|object|

An example of how the body should appear:
```
{
    "symptoms": {
        "pain": "false",
        "other": "false",
        "nausea": "false",
        "stress": "false",
        "fatigue": "false",
        "seizure": "false",
        "insomnia": "false",
        "eyePressure": "false",
        "muscleSpasm": "false",
        "inflammation": "false",
        "lackOfAppetite": "false"
    },
    "race": {
        "race1": "false",
        "race2": "false",
        "race3": "false"
    },
    "flavor": {
        "pine": "false",
        "minty": "false",
        "nutty": "false",
        "spicy": "false",
        "sweet": "false",
        "citrus": "false",
        "earthy": "false",
        "herbal": "false",
        "pungent": "false"
    }
}
```

**What will be returned:**
You will recieve the user object that was updated with user's info.
```
{
    "id": 3,
    "username": "allen",
    "location": Boston,
    "age": 32,
    "experienced": true,
    "symptoms": {
        "pain": "false",
        "other": "false",
        "nausea": "false",
        "stress": "false",
        "fatigue": "false",
        "seizure": "false",
        "insomnia": "false",
        "eyePressure": "false",
        "muscleSpasm": "false",
        "inflammation": "false",
        "lackOfAppetite": "false"
    },
    "race": {
        "race1": "false",
        "race2": "false",
        "race3": "false"
    },
    "flavor": {
        "pine": "false",
        "minty": "false",
        "nutty": "false",
        "spicy": "false",
        "sweet": "false",
        "citrus": "false",
        "earthy": "false",
        "herbal": "false",
        "pungent": "false"
    }
}

```

**[GET] Get Info for ALL Strains**

URL: https://med-cabinet1.herokuapp.com/api/strains

**What will be returned:**
You will recieve an array of strain objects with all their info.
```
[
{
        "id": 1,
        "name": "Afpak",
        "race": "hybrid",
        "flavors": [
            "Earthy",
            "Chemical",
            "Pine"
        ],
        "effects": {
            "medical": [
                "Depression",
                "Insomnia",
                "Pain",
                "Stress",
                "Lack of Appetite"
            ],
            "negative": [
                "Dizzy"
            ],
            "positive": [
                "Relaxed",
                "Hungry",
                "Happy",
                "Sleepy"
            ]
        }
    },
    {
        "id": 2,
        "name": "African",
        "race": "sativa",
        "flavors": [
            "Spicy/Herbal",
            "Pungent",
            "Earthy"
        ],
        "effects": {
            "medical": [
                "Depression",
                "Pain",
                "Stress",
                "Lack of Appetite",
                "Nausea",
                "Headache"
            ],
            "negative": [
                "Dry Mouth"
            ],
            "positive": [
                "Euphoric",
                "Happy",
                "Creative",
                "Energetic",
                "Talkative"
            ]
        }
    },
    {
        "id": 3,
        "name": "Afternoon Delight",
        "race": "hybrid",
        "flavors": [
            "Pepper",
            "Flowery",
            "Pine"
        ],
        "effects": {
            "medical": [
                "Depression",
                "Insomnia",
                "Pain",
                "Stress",
                "Cramps",
                "Headache"
            ],
            "negative": [
                "Dizzy",
                "Dry Mouth",
                "Paranoid"
            ],
            "positive": [
                "Relaxed",
                "Hungry",
                "Euphoric",
                "Uplifted",
                "Tingly"
            ]
        }
    },
]
```

**[DELETE] Remove strain from database based on the strain's Id**

URL: https://med-cabinet1.herokuapp.com/api/strains/:id

**What will be returned:**
You will recieve a message object that the strain was deleted.
```
{
    "message": "Successfully deleted strain."
}
```
