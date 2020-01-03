
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


##LOGIN##

##POST## https://pro-pens.herokuapp.com/api/auth/login

#With body:#

{
	"username": "tdog",
	"password": "woof"
}

##RETURNS##

{
	"id":1,
	
	"username":"tdog",
	
	"token":
	
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsInVzZXJuYW1lIjoidGRvZyIsImlhdCI6MTU3ODAzMjI5MiwiZXhwIjoxNTc4MDM5NDkyfQ.-s12LsSZyg8uirpAfVlNfGat438iQFl7V2Ec1YD3Rzo"
	}