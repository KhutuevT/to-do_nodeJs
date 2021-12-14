const express = require("express");
const app = express();
const User

app.delete("/deleteUser", (req, res) => {
    if (req.body.id.trim().length) {
        const id = req.query.id;
        User.deleteOne({ _id: id })
          .then((result) => {
            res.send("User delete");
          })
          .catch((err) => {
            res.send(err);
          });
      } else {
        res.status(400).send("Wrong data");
      }
})