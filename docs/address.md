 # Address API Spec

 ## Create Address API
 
Endpoint: POST /api/contacts/:contactId/addresses

Headers:

- Authorization : token

Request Body :

```json
{
    "street" : "Jalan",
    "city" : "Kota",
    "province" : "Porvinsi",
    "country" : "Negara",
    "postal_code" : "POS"
}
```

Response Body Success :

```json
{
    "data" : {
        "id":1,
        "street" : "Jalan",
        "city" : "Kota",
        "province" : "Porvinsi",
        "country" : "Negara",
        "postal_code" : "POS"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country is required" 
}
```

 ## Update Address API

Endpoint: PUT /api/contacts/:contactId/addresses/:addressId

Headers:

- Authorization : token

Request Body :

```json
{
    "street" : "Jalan",
    "city" : "Kota",
    "province" : "Porvinsi",
    "country" : "Negara",
    "postal_code" : "POS"
}
```

Response Body Success :

```json
{
    "data" : {
        "id" :1,
        "street" : "Jalan",
        "city" : "Kota",
        "province" : "Porvinsi",
        "country" : "Negara",
        "postal_code" : "POS"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country is required"  
}
```

 ## Get Address API
 
Endpoint: GET /api/contacts/:contactId/addresses/:addressId

Headers:

- Authorization : token

Response Body Success :

```json
{
   "data" : {
        "id" :1,
        "street" : "Jalan",
        "city" : "Kota",
        "province" : "Porvinsi",
        "country" : "Negara",
        "postal_code" : "POS"
    }
}
```

Response Body Error :

```json
{
    "errors" :"Contact is not found" 
}
```

 ## List Address API

 Endpoint: GET /api/contacts/:contactId/addresses

 Headers:

- Authorization : token

Response Body Success :

```json
{
    "data" : [
        {
            "id" :1,
            "street" : "Jalan",
            "city" : "Kota",
            "province" : "Porvinsi",
            "country" : "Negara",
            "postal_code" : "POS"
        },
        {
            "id" :2,
             "street" : "Jalan",
            "city" : "Kota",
            "province" : "Porvinsi",
            "country" : "Negara",
            "postal_code" : "POS"
        }
    ]   
}
```

Response Body Error :

```json
{
    "errors" :"Contact is not found" 
}
```

## Remove Contact API

Endpoint: DELETE /api/contacts/:contactId/addresses/addressId

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