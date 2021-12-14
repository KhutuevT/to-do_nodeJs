const Task = require("../../db/models/task/index");

module.exports.getAllTasks = (req, res, next) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createTask = (req, res, next) => {
  if (req.body.text.trim().length && typeof req.body.isCheck === "boolean") {
    const task = new Task(req.body);
    task.save().then((result) => {
      res.send(result);
    });
  } else res.status(422).send("Wrong data");
};

module.exports.updateTask = (req, res, next) => {
  if (req.body.hasOwnProperty("id")) {
    if (req.body.hasOwnProperty("text") && req.body.hasOwnProperty("isCheck")) {
      const { id, text, isCheck } = req.body;
      Task.updateOne({ _id: id }, { text: text, isCheck: isCheck })
        .then((result) => {
          res.send("Task update");
        })
        .catch((err) => {
          res.send(err);
        });
    } else if (req.body.hasOwnProperty("text")) {
      const { id, text } = req.body;
      Task.updateOne({ _id: id }, { text: text })
        .then((result) => {
          res.send("Task update");
        })
        .catch((err) => {
          res.send(err);
        });
    } else if (req.body.hasOwnProperty("isCheck")) {
      const { id, isCheck } = req.body;
      Task.updateOne({ _id: id }, { isCheck: isCheck })
        .then((result) => {
          res.send("Task update");
        })
        .catch((err) => {
          res.send(err);
        });
    }
  } else res.status(422).send("Wrong data");
};

module.exports.deleteTask = (req, res, next) => {
  if (req.body.id.trim().length) {
    const id = req.query.id;
    Task.deleteOne({ _id: id })
      .then((result) => {
        res.send("Task delete");
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.status(422).send("Wrong data");
  }
};
