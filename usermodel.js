const mongoose = require ('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/CSA_number`, {useNewUrlParser: true})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// mongoose schema a method which accepts objecrs
//schema is what fields the user will have
// and then a model is created and on the base of model only crud can be performed

const userSchema = mongoose.Schema({
        PRODUCT: String, 
        CAS_number: String
      });
      
// model building
// and whatever would be schema name models created wll be plurals of it

//exporting the model
module.exports = mongoose.model("products" , userSchema);