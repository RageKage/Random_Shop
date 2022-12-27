let express = require("express");
let menu_api = require('./routes/menu')

let app = express();

app.use(express.json());

app.use('/api', menu_api);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

app.use(function (err, req, res, next) {
    console.log(err.stack)
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function (){
    console.log('App running on port', server.address().port)
})