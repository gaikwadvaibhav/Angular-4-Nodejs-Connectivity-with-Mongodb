const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../model/user')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Vaibhav your first app is works');
});

router.post('/save', (req, res) => {
  console.log(req.body);
  const user = new User({
    email:req.body.email,
    username:req.body.username,
    mobile:req.body.mobile,
    password:req.body.password
   });
   user.save((err) => {
console.log(req);

     if(err){
       res.send({success:false, message:err})
     }else{
       res.send({success:true, message:'user saved success....!'})
     }
   });
} );


router.get('/getUser',(req,res)=>{
  User.find({},(err,users)=>{
    if(err){
      res.json({success:false, message:err});
    }else{
      res.json({success:true, message:users});
    }
  })
});

router.get('/getSingleUser/:id',(req,res)=>{
  User.findOne({_id:req.params.id},(err,user)=>{
    if(err){
      res.json({success:false, message:err});
    }else{
      res.json({success:true, message:user});
    }
  })
})


router.delete('/deleteUser/:id',(req,res)=>{
  User.findOne({_id:req.params.id},(err,user)=>{
    if(err){
      res.json({success:false, message:err});
    }else{
      if(!user){
        res.json({success:false, message:'User not found'});
      }else{
        user.remove((err)=>{
          if(err){
            res.json({success:false, message:err});
          }else{
            res.json({success:true, message:'USer Deleted.'})
          }
        })
      }
    }
  })
})

router.put('/updateUser/:id',(req,res) => {
  User.findOne({_id:req.params.id},(err,user) => {
    if(err){
      res.json({success:false, message:err});
    }else{
      if(!user){
        res.json({success:false, messages:'User Not Found'});
      }else{
        user.email =req.body.email;
        user.username = req.body.username;

        user.save((err) => {
          if(err){
            res.json({success:false, message: err});
          }else{
            res.json({success:true, message:'USER SAVED'})
          }
        })

      }
      // res.json({})
    }
  })
})
module.exports = router;