const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usermodel = require('./usermodel'); // Import the schema
const axios = require('axios');
const app = express();

app.use(bodyParser.json());

app.get('/cas', async (req, res) => {
    try {
        const data = await usermodel.find(); 
        res.json(data); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/' , async(req , res)=>{
    console.log("response.data")
try{
const response = await axios.get('https://www.chemicalbook.com/Search_EN.aspx?keyword=METHANOL')
res.send(response.data)
}
catch(err){
    console.log(err);  
}
});

// The .post method takes in two parameters. The first parameter is the URL you are trying to access. The second parameter is the data object you are trying to send in your POST request.


app.listen(3000);
