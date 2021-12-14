const express = require("express");
const app = express();
const User

app.patch("/updateUserData", (req, res) => {
  const{id, name} = req.body;
  User.updateOne({_is: id}, {name: name})
    .then((result) => {
      res.send("Task update");
    })
    .catch((err) => {
      res.send(err);
    });
})
