let express = require("express");
let MenuItem = require("../models").MenuItem;
let router = express.Router();

// MenuItem.findAll({order: ['name']}).then(menuItems => {
//   console.log(menuItems);
// });

router.get("/menu", function (req, res, next) {
  MenuItem.findAll()
    .then((menuItems) => {
      return res.json(menuItems);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/menu/:name", function (req, res, next) {
  let Itemname = req.params.name;

  MenuItem.findOne({ where: { name: Itemname } })
    .then((item) => {
      if (item) {
        return res.json(item);
      } else {
        return res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      return next(err);
    });
});

router.patch("/menu/:name", function (req, res, next) {
  let Itemname = req.params.name;
  let Itemquantity = req.body.quantity;

  MenuItem.update({ quantity: Itemquantity }, { where: { name: Itemname } })
    .then((rowsUpdated) =>   {
    // console.log(rowsUpdated)
    let numberOfRows = rowsUpdated[0];
    if (numberOfRows === 1) {
      return res.send("ok");
    }
    return res.status(404).send("Food not found");
  })
  .catch((err) => {
    return next(err);
  });

});

module.exports = router;
