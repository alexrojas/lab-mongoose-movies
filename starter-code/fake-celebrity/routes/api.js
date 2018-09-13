const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')



router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json(err)
    })
})

router.get('/celebrity', (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json(err)
    })
})

// router.post('/movies/create', (res, req, nest)=>{
//   let newMovie = {
//     title: req.body.title,
//     image: req.body.image,
//     celebrity: req.body.celebrity,
//     genre: req.body.genre,
//     plot: req.body.plot,
//     owner: req.user._id
//   }
//   console.log(newMovie)
//   Movie.create(newMovie)
//     .then((data) => {
//       // console.log(req.body.celebrity)
//       res.redirect('/movies/index')
//     })
//     .catch(next)
// })

router.post('/movies/create', (req, res, next)=>{
console.log(req.body)
    Movie.create({
        title: req.body.title,
        plot: req.body.plot,
        genre: req.body.genre,
        image: req.body.image
    })
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.json(err);
    })

});




module.exports = router
