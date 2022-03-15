let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const cors=require("cors");
router.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/SmartTabs");
let Schema = mongoose.Schema;

let blogSchema = new Schema(
  {
    x1: String, y1: String,
    x2: String, y2: String,
    x3: String, y3: String,
    x4: String, y4: String,
    x4: String, y5: String,
    x6: String, y6: String,
    x7: String, y7: String,
  },
  { collection: "MouseTracker", versionKey:false }
);
let Model = mongoose.model("SmartTabs", blogSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
});

// router.post("/setNoEmployees", function (req, res, next) {
//   console.log(req.body)
//   var data = new EmployeeModel(req.body)
//   data.save()
//   res.end()
// });

router.get("/getData", function (req, res, next) {
  Model.find().then(function (docs) {
     // theDoc = JSON.stringify(theDoc)
    res.json(docs)
  });
});

module.exports = router;
