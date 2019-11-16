
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app",{useNewUrlParser:true});

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));
db.once('open', function(){
    console.log('We are connected');
});

var kittySchema = new mongoose.Schema({
    name:String
});

kittySchema.methods.speak = function(){
    var greeting =  this.name ? "Meow name is "  + this.name: "I don't have a name";
    console.log(greeting);
 } ;

var kitten = mongoose.model('Kitten',kittySchema);

var silence = new kitten({name:'Siilence'});

console.log(silence.name);


var fluffy = new kitten({name:'fluffy'});
//fluffy.speak();

fluffy.save(function(err,kittens){
    if(err){
        return console.error(err);
    }
    fluffy.speak();
})

// kitten.find((err,kittens)=>{
//     if(err)
//     return console.error(err);
//     console.log(kittens);
// });

kitten.remove((err,kittens)=>{
    if(err)
    return console.error(err);
    console.log('Kittens are deleted '+kittens);
});

kitten.find({name:/^fluff/},(err,kittens)=>{
    if(err)
    return console.error(err);
    console.log(kittens);
});
