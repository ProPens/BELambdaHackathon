
Pro Pens Backend

Base URL:

https://pro-pens.herokuapp.com/api

Register

POST /auth/register


{
	"fullname": ["Beatrice", "White"],
	"email": "golden@girls.com",
	"school_level": "elementary",
	"username": "betty",
	"password": "staygold"
	
}

RETURNS

{

  "id": 1,
  "fullname": [
​    "Beatrice",
​    "White"
  ],
  "username": "betty"

}


LOGIN

POST /auth/login

With body:

{
	"username": "tdog",
	"password": "woof"
}

RETURNS

{
	"id":1,
	
	"username":"tdog",
	
	"token":
	
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsInVzZXJuYW1lIjoidGRvZyIsImlhdCI6MTU3ODAzMjI5MiwiZXhwIjoxNTc4MDM5NDkyfQ.-s12LsSZyg8uirpAfVlNfGat438iQFl7V2Ec1YD3Rzo"
	}

	GET /api/occupations
	Gets all occupations


	GET /api/occupations/:subject
	where <:subject> can be = arts, math, science, social_studies, athletics, or english
	returns all jobs within the respective field


	---------------------------------------------------------------------
	---------------------------------------------------------------------
	Authenticated routes need token
	---------------------------------------------------------------------
	---------------------------------------------------------------------

	GET /api/user
	returns ALL students

	GET /api/user/:id
	returns student with the given ID



	POST /api/user/assignment

body (id and date auto populate) (date can be added with format date: yyyy-mm-dd if desired)
{
	"assignment": "Add some numbers",
	"details": "I don't like this math",
	"student_id": 3,
	"subject_id": 3
}


GET /api/user/assignment

returns ALL assignments


GET /api/user/assignment/:id

returns assignment with the corresponding ID



POST /api/user/:id/:subject (no body)

INCREASES the rating by one for the student whose id you supply in the subject you supply

POST /api/user/:id/:subject/subtract (no body)

DECREASES the rating by one for the student whose id you supply in the subject you supply