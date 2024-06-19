 # Contact API Spec

 ## Create Contact API
 
Endpoint: POST /api/contacts

Headers:

- Authorization : token

Request Body :

```json
{
    "firstName" : "Tahta",
    "lastName" : "FM",
    "email" : "tahtafailah@gmail.com",
    "phoe" : "123123123123"

}
```

Response Body Success :

```json
{
    "data" : {
        "id" :1,
        "firstName" : "Tahta",
        "lastName" : "FM",
        "email" : "tahtafailah@gmail.com",
        "phoe" : "123123123123"
    },
}
```

Response Body Error :

```json
{
    "errors" : "Email already taken" 
}
```

 ## Update Contact API

Endpoint: PUT /api/contacts/:id

Headers:

- Authorization : token

Request Body :

```json
{
    "firstName" : "Tahta",
    "lastName" : "FM",
    "email" : "tahtafailah@gmail.com",
    "phoe" : "123123123123"
}
```

Response Body Success :

```json
{
    "data" : {
        "id" :1,
        "firstName" : "Tahta",
        "lastName" : "FM",
        "email" : "tahtafailah@gmail.com",
        "phoe" : "123123123123"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Email already taken"  
}
```

 ## Get Contact API
 
Endpoint: GET /api/contact/:id

Headers:

- Authorization : token

Response Body Success :

```json
{
   "data" : {
        "id" :1,
        "firstName" : "Tahta",
        "lastName" : "FM",
        "email" : "tahtafailah@gmail.com",
        "phoe" : "123123123123"
    }
}
```

Response Body Error :

```json
{
    "errors" :"Contact is not found" 
}
```

 ## Search Contact API

 Endpoint: GET /api/contacts

 Headers:

- Authorization : token

Qeery params:
- name : Search by firstName or lastName, using like query, optional.
- email : Search by email, using like query.
- phone : Search by phone, using like query.
- page : Number of page, default 1.
- size : Size per page, default 10.

Response Body Success :

```json
{
    "data" : [
        {
            "id" :1,
            "firstName" : "Tahta",
            "lastName" : "FM",
            "email" : "tahtafailah@gmail.com",
            "phoe" : "123123123123"
        },
        {
            "id" :2,
            "firstName" : "Tahta",
            "lastName" : "FM",
            "email" : "tahtafailah@gmail.com",
            "phoe" : "123123123123"
        }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
```

Response Body Error :

```json
{
    "errors" :"Unauthorized" 
}
```

## Remove Contact API

Endpoint: DELETE /api/contacts/:id

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
    "errors" :"Contact is not found" 
}
```