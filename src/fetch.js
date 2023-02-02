/*// Importing mongoose module
const mongoose = require("mongoose")
// Database Address
const url = "mongodb+srv://user1:kmit1@cluster0.wrre8na.mongodb.net/?retryWrites=true&w=majority"
// Connecting to database
mongoose.connect(url).then((ans) => {
  console.log("ConnectedSuccessful")
}).catch((err) => {
  console.log("Error in the Connection")
})*/
// // Calling Schema class
// const Schema = mongoose.Schema;
// const collection_structure = new Schema({
//     SNo:{
//         type:Number
//     },
//     Ownername:{
//         type:String
//     },
//     Status:{
//         type:String
//     }
// })
// collections.find().then((ans) => {
//            console.log(ans)
//        })

//Creating Structure of the collection
// const Schema = mongoose.Schema;
// const collection_structure = Schema({
//   SNo: {
//     type: Number,
//   },
//   Ownername: {
//     type: String,
//   },
//   Status: {
//     type: String,
//   },
// })

// // Creating collection
// const collections = mongoose.model("Admin", collection_structure)
// collections.find().then((ans) => {
//        console.log(ans)
//       })
// Inserting one document
// collections.create({
//   SNo:01,
//   name: "Sravya",
//   registrationstatus:"Pending"

// }).then((ans) => {
//   console.log("Document inserted")
//   // Inserting invalid document
//   collections.create({
//     name: "saini",
//     marks: "#234",
//     phone: 981
//   })
// .then((ans) => {
//     console.log(ans)
//   }).catch((err) => {
//     // Printing the documents
//     collections.find().then((ans) => {
//       console.log(ans)
//     })
//     // Printing the Error Message
//     console.log(err.message)
//   })
// }).catch((err) => {
//   // Printing Error Message
//   console.log(err.message)
// })
// var mongoose = require('mongoose');
//     var uri = 'mongodb+srv://user1:kmit1@cluster0.wrre8na.mongodb.net/?retryWrites=true&w=majority';
//     var connection = mongoose.createConnection(uri);
//     const Schema = mongoose.Schema;
//      const collection_structure = new Schema({
//         SNo:{
//             type:Number
//         },
//         Ownername:{
//             type:String
//         },
//         Status:{
//             type:String
//         }
//     })
//     console.log(Schema);
// //Create model===================================================
// var BlogPostModel = connection.model('BlogPost', BlogPostSchema);


// //function to insert doc into model NOTE "pass in your =======
// //callback or do away with it if you don't need one"=========
// var insertBlogPost = function (doc, callback) {

//   //here is where or doc is converted to mongoose object
//   var newblogPost = new BlogPostModel(doc); 

//   //save to db
//   newblogPost.save(function (err) {

//     assert.equal(null, err);

//     //invoke your call back if any
//     callback();
//     console.log("saved successfully");
//   });
// };


// //function to get all BlogPosts====================================
// var getAllBlogPosts = function (callback) {

// //mongoose get all docs. I think here answers your question directly
//   BlogPostModel.find(function (err, results) {
//     assert.equal(null, err);

//     //invoke callback with your mongoose returned result
//     callback(results);
//   });
// };


// //you can add as many functions as you need.

// //Put all of your methods in a single object interface 
// //and expose this object using module.

// var BlogPostManager = {
//     insertBlogPost: insertBlogPost,
//     getAllBlogPosts : getAllBlogPosts
// }


// module.exports = BlogPostManager;
// var mongoose = require ("mongoose");
// var url = "mongodb+srv://user1:kmit1@cluster0.wrre8na.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(url, function(err, db){
//   if (err) throw err;
//   var dbo = db.db("Cluster0");
//   dbo.collection("Admin").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
// const mongoose = require('mongoose'); 
// // Database connection
// mongoose.connect('mongodb+srv://user1:kmit1@cluster0.wrre8na.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// // User model
// const User = mongoose.model('gfg2', {
//   name:{
//                 type:
//             },
//             Ownername:{
//                 type:String
//             },
//             Status:{
//                 type:String
//             }
// });
// gfg2.find( function (err, docs) {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log( docs);
//     }
// });
/*********************************************************************************************************************/
/*//Importing mongoose module
const mongoose = require("mongoose")
 
// Database Address
const url = "mongodb+srv://user1:kmit1@cluster0.wrre8na.mongodb.net/?retryWrites=true&w=majority"
// Connecting to database
mongoose.connect(url).then((ans) => {
  console.log("ConnectedSuccessful")
}).catch((err) => {
  console.log("Error in the Connection")
})
// Calling Schema class
const Schema = mongoose.Schema;
// Creating Structure of the collection
const collection_structure = new Schema({
  name: {
    type: String,
    require: true
  },
  marks: {
    type: Number,
    default: 0
  }
})
 
// Creating collection
const collections = mongoose.model("GFG2", collection_structure)
 
// Inserting one document
collections.create({
  name: "aayush"
}).then((ans) => {
  console.log("Document inserted")
  // Inserting invalid document
  collections.create({
    name: "saini",
    marks: "#234",
    phone: 981
  }).then((ans) => {
    console.log(ans)
  }).catch((err) => {
    // Printing the documents
    collections.find().then((ans) => {
      console.log(ans)
    })
    // Printing the Error Message
    console.log(err.message)
  })
}).catch((err) => {
  // Printing Error Message
  console.log(err.message)
})*/
//Importing mongoose module
/*const mongoose = require("mongoose")
// Database Address
const url = "mongodb+srv://user1:kmit1@cluster0.wrre8na.mongodb.net/VRLMS?retryWrites=true&w=majority"
// Connecting to database
mongoose.connect(url).then((ans) => {
  console.log("ConnectedSuccessful")
}).catch((err) => {
  console.log("Error in the Connection")
})
const Schema = mongoose.Schema;
const collection_structure = new Schema({
      SNo:{
        type:String
      },
      Ownername:{
          type:String
      },
      Status:{
          type:String
      }
  })
  const collections = mongoose.model("Admin", collection_structure)
  collections.find().then((ans) => {
             console.log(ans)
         })*/
/*const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const url = "mongodb+srv://user1:kmit1@cluster0.wrre8na.mongodb.net/VRLMS?retryWrites=true&w=majority";
mongoose.connect(url).then(() => { console.log("CON") }).catch(() => { console.log("NOR CON") });
const Schema = mongoose.Schema;
const itemSchema = new Schema({
  SNo:String,
  name: String,
  location: String
},
  { collection: "Admin" }
);
const Item = mongoose.model("", itemSchema);

Item.find({}, (err, items) => {
  if (err) {
    console.log(err);
  } else {
    for (let i = 0; i < 3; i++) {
      console.log(items[i].ownernamename, items[i].location);
    }
  }
});*/
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

