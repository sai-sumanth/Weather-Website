const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html");
    
});
app.post("/",function(req,res) {
    const query=req.body.cityName;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=42c570acda5e680dc902010985cda260&units=metric#";
    https.get(url,function(responce){
        console.log(responce);
        responce.on("data",function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const weatherDescription=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<p>The weather is currently :"+weatherDescription+"</p>");
            res.write("<h1>The temperature in "+query+" :"+temp+" degree celcius.</h1>");
            res.write("<img src="+ imageurl +">");
            res.send();

        });
    });
    
})

app.listen(100,function() {
    console.log("server activated");
});
