let express = require("express");
let MenuItem = require('../models').MenuItem;;
let router = express.Router();


// MenuItem.findAll({order: ['name']}).then(menuItems => {
//   console.log(menuItems);
// });


router.get('/menu', function (req, res, next) {

  MenuItem.findAll({order: ['name']}).then(menuItems => {

    console.log(menuItems);
    return res.json(menuItems)
  }).catch(err => {
        next(err);
  });
});

module.exports = router;
