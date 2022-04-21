let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const cors=require("cors");
router.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/SmartTabs"); // connection to the database 
let Schema = mongoose.Schema;

let blogSchema = new Schema(
  {
    x1: String, y1: String,// x and y values for the activity chart
    x2: String, y2: String,
    x3: String, y3: String,
    x4: String, y4: String,
    x4: String, y5: String,
    x6: String, y6: String,
    x7: String, y7: String,
    t1: String, // t value for the gauge total
  },
  { collection: "MouseTracker", versionKey:false } // chooosing the correct collection
);
let Model = mongoose.model("SmartTabs", blogSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
});

router.get("/getData", function (req, res, next) {
  Model.find().then(function (docs) {
    res.json(docs)
  });
});

module.exports = router;
