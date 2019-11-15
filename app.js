var express = require("express");

var app = express();

app.set("view engine",'ejs');


app.get("/", (req, res)=>{
    res.render("homepage");
});

var campGrounds = [{name:"Camp-1", image:"https://www.freeimageslive.co.uk/files/images008/lakeside_camping.thumbnail.jpg"},{name:"Camp-2", image:"https://www.freeimageslive.co.uk/files/images006/Rock_On_Beach.thumbnail.jpg"},{name:"Camp-3", image:"https://www.freeimageslive.co.uk/files/images008/lake_pedder_tent.thumbnail.jpg"}];

app.get("/campgrounds",(req,res)=>{
    res.render("campgrounds",{campGrounds:campGrounds});
    
});

app.listen(3000,"127.0.0.1",function(){
    console.log("Yelpcamp server started to listen");
});
