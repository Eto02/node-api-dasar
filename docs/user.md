 # User API Spec

 ## Register User API
 
Endpoint: POST /api/users

Request Body :

```json
{
    "username" : "pzn",
    "password" : "rahasia",
    "name" : "Tahta FM"
}
```

Response Body Success :

```json
{
    "data" : {
        "username" :"pzm",
        "name" : "Tahta FM"
    },
}
```

Response Body Error :

```json
{
    "errors" :"Username already registered" 
}
```

 ## Login User API

Endpoint: POST /api/users/login

Request Body :

```json
{
    "username" : "pzn",
    "password" : "rahasia",
}
```

Response Body Success :

```json
{
    "data" : {
        "token" :"unique-token",
    }
}
```

Response Body Error :

```json
{
    "errors" :"Username or password wrong" 
}
```

 ## Update User API
 
Endpoint: PATCH /api/users/current (Partial changes)

Headers:

- Authorization : token
 
Request Body :

```json
{
    "name" : "Tahta FM Updated", //optional;
    "password" : "New password", //optional
}
```

Response Body Success :

```json
{
    "data" : {
        "username" :"pzn",
        "name" : "Tahta FM Updated"
    }
}
```

Response Body Error :

```json
{
    "errors" :"Name length max 100" 
}
```

 ## Get User API

 Endpoint: GET /api/users/current

 Headers:

- Authorization : token
 
Response Body Success :

```json
{
    "data" : {
        "username" :"pzn",
        "name" : "Tahta FM Updated"
    }
}
```

Response Body Error :

```json
{
    "errors" :"Unauthorized" 
}
```

## Logout User API

Endpoint: DELETE /api/users/logout

 Headers:

- Authorization : token
 
Response Body Success :

```json
{
    "data" : "OK"
}
```

Response Body Error :

```json
{
    "errors" :"Unauthorized" 
}
```