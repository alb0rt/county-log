// Model for county list
var mongoose = require("mongoose");

var EntrySchema = new mongoose.Schema({
    id : String,
    county : String,
    stayed : Boolean,
    username : String
});

mongoose.model("Entry", EntrySchema);
