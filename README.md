
Pro Pens Backend

Base URL:

https://pro-pens.herokuapp.com/api

Register

POST /auth/register

{ "fullname": ["Beatrice", "White"],
"email": "golden@girls.com",
"school_level": "elementary",
"username": "betty",
"password": "staygold"
}

returns:

{

"id": 1,
"fullname":
[
​ "Beatrice",
​ "White"
],
"username": "betty"
}
=======
# Pro Pens Backend



## Base URL: 

###### https://pro-pens.herokuapp.com/api

### Register

#### POST  /auth/register



{
	"fullname": ["Beatrice", "White"],
	"email": "golden@girls.com",
	"school_level": "elementary",
	"username": "betty",
	"password": "staygold"
	
}

###### returns:

{

  "id": 1,

  "fullname": [

​    "Beatrice",

​    "White"

  ],

  "username": "betty"

}




https://pro-pens.herokuapp.com/api/auth/login
https://pro-pens.herokuapp.com/api/auth/register