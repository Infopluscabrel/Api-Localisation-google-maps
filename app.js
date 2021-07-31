const express = require('express') ;
const app = express() ;
const request = require('request')
const dataRouter = require('./routes/data')



app.use(express.json())

 app.use(dataRouter)
 app.post('/api/get_distance_and_timei', (req, res) => {


     latitude = req.body.start.lat
     longitude = req.body.start.lng
     units = req.body.start.units



 });



app.listen(5000,() => {
    console.log(" le serveur est bien demarre")
})
 //module.exports = app
