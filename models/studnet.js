var mongoos = require('mongoose')
var Schema = require.Schema
var mongoUrl = process.env.MONGODB_URI||'mongodb://localhost/students'
mongoose.connect(mongoUrl,function(err){
  if(err) throw err;
})
var student_schema = new Schema({
  fname: String,
  lname: String,
  imageUrl: String,
  finger: Schema.Types.Mixed,
  created: {type: Date, default: Date.now}
})
var Student = mongoose.model('Student',student_schema)
module.exports.Student = Student
