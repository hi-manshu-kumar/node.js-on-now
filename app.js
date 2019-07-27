const express = require('express');         // requiring express which is returning us a funtion
const app = express();                      // calling express function which return us a object
const port = process.env.PORT || 5000;      // specifing port on which our server will be running

app.get('/', (req, res) => {                // route handler for "/"
    res.send("Hi there!!"); 
});

app.get('/profile', (req, res) => {         // route handler for "/profile"
    res.send("On profile route");
});

app.get('*',(req, res) => {                // route handler for rest of rotues 
    res.send("Ehhhh!!! No route found!!!"); 
});

app.listen(port, ()=> {                     // server will run on specified port
    console.log(`---Server running on ${port}---`);
});