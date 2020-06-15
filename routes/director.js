const mongoose= require("mongoose");
const express = require("express");
const router = express.Router();
const Director = require("../models/Directors");

router.post('/',(req,res)=>{
const director = new Director(req.body)
const promise= director.save();
promise
.then((data)=>{
res.json(data);
})
.catch((err)=>{
    res.json(err)
})

})

router.get('/getall',(req,res)=>{
const promise= Director.find({})
promise
.then((directors)=>{
    res.json(directors)

})
.catch((err)=>{
    res.json(err)})
})
//GET directors relational
router.get('/',(req,res)=>{
    const promise= Director.aggregate([
        {
        
        $lookup:{
            from:'movies',
            localField:'_id',
            foreignField:'director_id',
            as: 'movies'
        }
    },
    {
        $unwind:{
            path:'$movies',
            preserveNullAndEmptyArrays : true
        }
    },
    {
        $group:{
            _id:{
                _id:'$id',
                name:'$name',
                surname:'$surname',
                bio:'$bio'
            },
            movies:{
                $push:'$movies'
            }
        }
    },
    {
        $project:{
            _id:'$_id.id',
            name:'$_id.name',
            surname:'$_id.surname',
            bio:'$_id.bio',
            movies:'$movies'
        }
    }
    
]);
    promise
    .then((directors)=>{
        res.json(directors)
    
    })
    .catch((err)=>{
        res.json(err)})
    })
    

    //GET one directors 
router.get('/:director_id',(req,res)=>{
    const promise= Director.aggregate([
        {
            $match:{
                "_id":mongoose.Types.ObjectId(req.params.director_id)
            }
        },
        {
        
        $lookup:{
            from:'movies',
            localField:'_id',
            foreignField:'director_id',
            as: 'movies'
        }
    },
    {
        $unwind:{
            path:'$movies',
            preserveNullAndEmptyArrays : true
        }
    },
    {
        $group:{
            _id:{
                _id:'$id',
                name:'$name',
                surname:'$surname',
                bio:'$bio'
            },
            movies:{
                $push:'$movies'
            }
        }
    },
    {
        $project:{
            _id:'$_id.id',
            name:'$_id.name',
            surname:'$_id.surname',
            bio:'$_id.bio',
            movies:'$movies'
        }
    }
    
]);
    promise
    .then((directors)=>{
        res.json(directors)
    
    })
    .catch((err)=>{
        res.json(err)})
    })


    //UPDATE director with id
router.put('/:director_id', (req, res) => {

    const promise = Director.findByIdAndUpdate(req.params.director_id,req.body,{new:true})
    
    promise
    .then((director)=>{
     
      res.json(director)
    })
    .catch((err)=>{
      //console.log("yok")
      res.json({"error":err})
    })
  });

  router.delete('/:director_id', (req, res) => {

    const promise = Director.findByIdAndRemove(req.params.director_id)
    
    promise
    .then((director)=>{
     
      res.json(director);
      
    })
    .catch((err)=>{
      console.log("yok")
      res.json({"error":err})
    })
  });
module.exports=router