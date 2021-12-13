const Task = require("../../db/models/task/index");

module.exports.getAllTasks = (req, res, next) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createTask = (req, res, next) => {
  if (req.body.text.trim().length & (typeof req.body.isCheck === Boolean)) {
    const task = new Task(req.body);
    task.save().then((result) => {
      res.send(result);
    });
  } else res.send("None");
};

module.exports.updateTask = (req, res, next) => {
  if (req.body.text.trim().length & (typeof req.body.isCheck === Boolean)) {
    Task.updateOne(
      { _id: req.body.id },
      { text: req.body.text, isCheck: req.body.isCheck }
    )
      .then((result) => {
        res.send("Task update");
      })
      .catch((err) => {
        res.send(err);
      });
  } else res.send("None");
};

module.exports.deleteTask = (req, res, next) => {
  const id = req.query.id;
  Task.deleteOne({ _id: id })
    .then((result) => {
      res.send("Task delete");
    })
    .catch((err) => {
      res.send(err);
    });
};
