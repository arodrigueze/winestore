var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name_category:String
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;