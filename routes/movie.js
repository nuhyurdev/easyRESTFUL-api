const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// GET movie List
router.get("/getall", (req, res) => {
  const promise = Movie.find({});
  promise
  
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

/* POST movie store. */
router.post("/", (req, res, next) => {
  //const {title, imdb_score,category, country,year} = req.body;
  //console.log(req.body)
  const movie = new Movie(req.body);

  movie.save((err, data) => {
    if (err) res.json(err);

    res.json({ status: 1 });
  });
});
 //between 

 router.get("/between/:start_year/:end_year",(req,res)=>{
   const promise = Movie.find(
     {
     year:{"$gte":parseInt(req.params.start_year),"$lte":parseInt(req.params.end_year)}
    }
   )
 promise
 .then((data)=>{
   res.json(data)
 })
 .catch((err)=>{
   res.json(err)
 })
  })

//TOP 10 List
router.get("/top10", (req, res) => {
  const promise = Movie.find({}).limit(10).sort({imdb_score:-1});
  promise
  
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET movie with id
router.get('/:movie_id', (req, res) => {

  const promise = Movie.findById(req.params.movie_id)
  
  promise
  .then((movie)=>{
    if (!movie) {
      console.log("yok")
    }
    res.json(movie)
  })
  .catch((err)=>{
    //console.log("yok")
    res.json({"error":err})
  })
});

//UPDATE movie with id
router.put('/:movie_id', (req, res) => {

  const promise = Movie.findByIdAndUpdate(req.params.movie_id,req.body,{new:true})
  
  promise
  .then((movie)=>{
   
    res.json(movie)
  })
  .catch((err)=>{
    //console.log("yok")
    res.json({"error":err})
  })
});
router.delete('/:movie_id', (req, res) => {

  const promise = Movie.findByIdAndRemove(req.params.movie_id)
  
  promise
  .then((movie)=>{
   
    res.json(movie);
    
  })
  .catch((err)=>{
    console.log("yok")
    res.json({"error":err})
  })
});


module.exports = router;