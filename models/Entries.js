// Model for county list
var mongoose = require("mongoose");

var EntrySchema = new mongoose.Schema({
    id : String,
    name : String,
    stayed : Boolean
});

mongoose.model("Entry", EntrySchema);
