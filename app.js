const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('i am petros and hello from heroku')
});
app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
}) ;