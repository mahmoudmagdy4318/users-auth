# users-auth
users authentication/ authorization service

This service is for managing creating and handling authentication and authorization for users.

### Technologies used
- node.js under Express.js framework
- mongoDb
##### Helper Libraries
- mongoose: mongodb object modeling for node.js.
- winston: logging library with support for multiple transports.
- nodemailer: to help us in emails sending.
- bcrypt: to hash users' passwords.
- dotenv: to read .env file.
- cors: to allow access control for our service.
- express-async-errors: to wrap our application and catch thrown errors, saves us to lessen try catch blocks. 
- joi: defines schemas to validate requests body.
- jsonwebtoken: allow us generate jwt tokens.
- lodash: has multiple helper methods for arrays and objects.

### Database Collections
##### users collection
The schema of the user is as follows
- username: "string"
- email: "string" *should be unique*
- password: "string"
- emailVerified: "boolean" *specifies whether the user verified his email or not*
 
### Service APIs
##### POST   /users
###### This API is to add new user
*Body schema* 
```
{
    username: required alphanumeric string with min 3 and max 20,
    password: required string with min 3 and max 30, has the following regex validation /^[a-zA-Z0-9_@]{3,30}$/,
    email: valid emails with only allowed tlds ['com', 'net']
}
```
*exapmle response*
```
{
    "username": "mahmoudmagdy",
    "email": "mahmoud.magdy.elghandr@gmail.com",
    "emailVerified": false,
    "_id": "625c3e52631fa65199180dd3"
}
```

##### POST   /users/login
###### This API is to login user
*Body schema* 
```
{
    email: valid emails with only allowed tlds ['com', 'net'],
    password: required string with min 3 and max 30, has the following regex validation /^[a-zA-Z0-9_@]{3,30}$/
}
```
*exapmle response*
```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWIzNTdkNGI1OGMyMzEyNzFiMDI0ZSIsImlhdCI6MTY1MDIxMjUxMiwiZXhwIjoxNjUwMjE2MTEyfQ.ZnVIqbEjJOiLN-X2U-tBb2xNxOi26RwjLp77Xjb1Tx8"
}
```

##### GET   /users
###### This API is to get all users
*headers schema* 
```
{
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWIzNTdkNGI1OGMyMzEyNzFiMDI0ZSIsImlhdCI6MTY1MDIxMjUxMiwiZXhwIjoxNjUwMjE2MTEyfQ.ZnVIqbEjJOiLN-X2U-tBb2xNxOi26RwjLp77Xjb1Tx8"
}
```
*exapmle response*
```
[
    {
        "_id": "625b357d4b58c231271b024e",
        "username": "mahmoud94",
        "email": "mahmoud@gmail.com"
    }
]
```

##### POST   /users/verify
###### This API is to verify user's email
*Body schema* 
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWIzNTdkNGI1OGMyMzEyNzFiMDI0ZSIsImlhdCI6MTY1MDIxMjUxMiwiZXhwIjoxNjUwMjE2MTEyfQ.ZnVIqbEjJOiLN-X2U-tBb2xNxOi26RwjLp77Xjb1Tx8"
}
```
*exapmle response*
```
{
    "success": true
}
```

### Code Structure
- ##### routes folder which contains all router files for our service.
- ##### controllers folder which contains all controller files which contains the hanlders for our apis.
- ##### models folder which contains all models in our service.
- ##### schemas folder which contains all schemas in our service.
- ##### middlewares folder which contains all used middlewares in our apis.
- ##### templates folder which contains our emails templates.
- ##### helpers folder which contains these folders:
- tokens: contains helper methods for generating and verifying jwt tokens.
- passwords: contains helper methods for hashing and comparing users' passwords. 
- errors: contains error handler and our custom errors.
- emails: conatins helpers for sending emails to users.

##### you can find our needed env variables example inside .env.example

##### inside config.js you can find our configurable variables through env variables



