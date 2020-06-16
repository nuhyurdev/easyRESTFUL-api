const express = require('express');
const Users = require('../models/Users');
const router = express.Router();
const bycript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = require('../app');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
router.post('/register', (req, res, next) => {
  const {username,passwd}=req.body;
bycript.hash(passwd,10).then((hash)=>{
  const user= new Users({
    username:username,
    passwd:hash
  })

  const promise=user.save();
  promise
  .then((data)=>{
    res.json(data);
  })
  .catch((err)=>{
    res.json({"error":err})
  })
})

});

router.post('/authenticate',(req,res)=>{
const {username,passwd}=req.body;
Users.findOne({
  username
},(err,user)=>{
  if(err)
  throw err;

  if(!user){
    res.json({
      status:false,
      message: "Authenticate failed! User not found!"
    })
  }
  else
  {
      bycript.compare(passwd,user.passwd).then((result)=>{
        if(!result){
          res.json({
            status:false,
            message:"authentication failed,wrong password"
          })
        }
        else
        {
           const payload={ 
            username
          };
          const token = jwt.sign(payload,req.app.get('api_secret_key'),{
            expiresIn:720
          })
            res.json({
            status:1,
            token
          })
        }
        
      })
    }
  
});

});
module.exports = router;
