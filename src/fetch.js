const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const url = "mongodb+srv://user1:kmit1@cluster0.wrre8na.mongodb.net/VRLMS?retryWrites=true&w=majority";
mongoose.connect(url).then(() => { console.log("CON") }).catch(() => { console.log("NOR CON") });

const Schema = mongoose.Schema;
const itemSchema = new Schema({
  SNo:String,
  Ownername: String,
  Status: String
},
   { collection: "Admin" }
);

const Item = mongoose.model("", itemSchema);
Item.find({}, (err, items) => {
  if(err) console.log(err);
  console.log(items);
});

