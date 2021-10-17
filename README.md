# easyRESTFUL-api

 <div align="center">
  <h3> Movie API created with express.js </h3>
<br>
  <br>
  <a href="https://github.com/noaahhh/easyRESTFUL-api/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/noaahhh/easyRESTFUL-api/issues"></a>
  <a href="https://github.com/noaahhh/easyRESTFUL-api/issues/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/noaahhh/easyRESTFUL-api"></a>
  <a href="https://github.com/noaahhh/easyRESTFUL-api/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/noaahhh/easyRESTFUL-api"></a>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project
This is a RESTful API using `express.js` and `MongoDB` no-SQL database system. 

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With
* [node.js](https://nodejs.com/)
* [express.js](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongo-Atlas](https://www.mongodb.com/cloud) 

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* `nodejs` 
Before installation, it's required to done that check the mongodb configuration in the `dbhelper`

### Installation

to install required packages 
```sh
$ npm install
```
to run tests
```sh
$ npm test
```
to run with nodemon
```sh
$ npm start
```


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
You can use a browser to send HTTP requests or use third-party software which can send HTTP requests. etc. [Postman](https://www.postman.com/) or [thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) being vscode extention 

### for Movies Collection

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies/getall | `GET` | Empty | List all movies. |
| /api/movies | `POST` | {'title':'foo', 'category':'bar', 'country':'Turkey', year:1997, director:"id", imdb_score: 10.0 } | Create a new movie. |
| /api/movies/:movie_id | `GET` | Empty | Get a movie. |
| /api/movies/:movie_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
| /api/movies/:movie_id | `DELETE` | Empty | Delete a movie. |
| /api/movies/top10 | `GET` | Empty | Get the top 10 movies. |
| /api/movies/between/:start_year/:end_year | `GET` | Empty | Movies between two dates. |

### for Directors Collection

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/directors/getall | `GET` | Empty | List all directors. |
| /api/directors | `GET` | Empty | List all directors relational with Movies. |
| /api/directors | `POST` | { name: 'foo', surname:'bar', bio:'lorem ipsum' } | Create a new director. |
| /api/directors/:director_id | `GET` | Empty | Get a director. |
| /api/directors/:director_id | `PUT` | {'name':'foo', 'surname':'bar', 'bio': 'lorem'} | Update a director with new info. |
| /api/directors/:director_id | `DELETE` | Empty | Delete a director. |

### for Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'foo', password:'1234' } | Create a new user. |
| /authenticate | `POST` | { username: 'foo', password:'1234' } | Generate a token. |

<!-- LICENSE -->

## License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

@noaahhh - [@noah_the_turk](https://twitter.com/noah_the_turk) 

Project Link: [ https://github.com/noaahhh/easyRESTFUL-api ](https://github.com/noaahhh/easyRESTFUL-api)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
---
<p align="right">(<a href="#top">back to top</a>)</p>


