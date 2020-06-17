const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();
const server = require("../app");
const app = require("../app");

chai.use(chaiHttp);
let token, movieId;

describe("/api/movies tests", () => {
  before((done) => {
    chai
      .request(server)
      .post("/authenticate")
      .send({ username: "noaahh", passwd: "123456" })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });
  describe("/GET movies", () => {
    it("it should Get all the movies", (done) => {
      chai
        .request(server)
        .get("/api/movies/getall")
        .set("x-access-token", token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Array");
          done();
        });
    });
  });
  describe("/POST movies", () => {
    it("it should register a new movie", (done) => {
      const movie = {
        title: "it",
        imdb_score: 9,
        category: "science-fiction",
        country: "USA",
        year: 1999,
        director_id: "5ee780929921ff64e5329b5d",
      };
      chai
        .request(server)
        .post("/api/movies")
        .send(movie)
        .set("x-access-token", token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.be.a("object");
          res.body.should.have.property("title");

          movieId = res.body._id;
          console.log(movieId);
          done();
        });
    });
  });
  describe("/GET/:movie_id movies", () => {
    it("it should get a movie by the given id ", (done) => {
      chai
        .request(server)
        .get("/api/movies/" + movieId)
        .set("x-access-token", token)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.a("object");
          res.body.should.have.property("_id").eql(movieId);
          done();
        });
    });
  });
  describe("/PUT/:movie_id movies", () => {
    it("it should UPDATE a new movie", (done) => {
      const movie = {
        title: "it",
        imdb_score: 5,
        category: "horror"
      };
      chai
        .request(server)
        .put("/api/movies/" + movieId)
        .send(movie)
        .set("x-access-token", token)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.a("object");
          res.body.should.have.property("title").eql(movie.title);
          res.body.should.have.property("imdb_score").eql(movie.imdb_score);
          res.body.should.have.property("category").eql(movie.category);
          done();
        });
    });
  });
  describe('/DELETE/:movie_id movies',()=>{
    it("it should DELETE the movie of given movie id ",(done)=>{
      chai
      .request(server)
      .delete(`/api/movies/${movieId}`)
      .set('x-access-token',token)
      .end((err,res)=>{

        res.should.have.status(200)
        res.should.have.be.a("object")
        res.body.should.have.property("status").eql(1)
        done()
      })
    })
  })
});
