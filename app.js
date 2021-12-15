const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = 8080;
const apiRoutes = require("./scr/modules/routes/routes");

const uri =
  "mongodb+srv://Tamerlan:restart987@cluster0.3ev4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//middleware
app.use(express.json());
app.use(cors());
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
