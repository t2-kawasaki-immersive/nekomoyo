# nekomoyo API

Cat coat pattern (called "nekomoyo") API.
An information of nekomoyo includes type and gene.
You can alse register your favorite nokomoyo!

# Usage

If you start nekomoyo api server in local, you need to clone this repo and install some packages(in npm)

* Requirements
  - npm
  - nodejs

* Install

```
npm install
```

* Start api server

```
npm run start
```

# API Document

### Base path

-   URL Path

```
/api
```

### Get all nekomoyo

-   URL Path

```
/nekomoyo
```

-   Path parameters

```
None
```

-   Query parameters

```
None
```

-   Request body

```
None
```

-   Response

```json
[
    {
        "id": 1,
        "type": "white",
        "image": "url_path1",
        "gene": "W-"
    }
]
```

### Get nekomoyo by ID

-   URL Path

```
/nekomoyo/{:id}
```

-   Path parameters

```
id: nekomoyoID
```

-   Query parameters

```
None
```

-   Request body

```
None
```

-   Response

```json
{
    "id": 1,
    "type": "white",
    "image": "url_path1",
    "gene": "W-"
}
```

### POST nekomoyo

-   URL Path

```
/nekomoyo/{:id}
```

-   Path parameters

```
None
```

-   Query parameters

```
None
```

-   Request body

```json
{
    "id": 99,
    "type": "red",
    "image": "url_path1",
    "gene": "xxxx"
}
```

-   Response

Returned added nekomoyo.

```json
{
    "id": 99,
    "type": "red",
    "image": "url_path1",
    "gene": "xxxx"
}
```

### PATCH nekomoyo

-   URL Path

```
/nekomoyo/{:id}
```

-   Path parameters

```
id: nekomoyoID
```

-   Query parameters

```
None
```

-   Request body

Specify new values in request body.

```json
{
    "gene": "xxxx"
}
```

-   Response

*   Returned new values of nekomoyo.

```json
{
    "gene": "xxxx"
}
```

### DELETE nekomoyo

-   URL Path

```
/nekomoyo/{:id}
```

-   Path parameters

```
id: nekomoyoID
```

-   Query parameters

```
None
```

-   Request body

```
None
```

-   Response

Returned id value of deleted item.

```
1
```
