const express = require("express");
const app = express();
app.use((req, res) => {
    // console.log("we got a new request!!");
    // console.dir(req);
    // console.log("Hello we got your request!!")
    res.send('<h1>This is my web page!</h1>')
    // res.send({ color: 'red' })

})

app.listen(8080, () => {
    console.log("listening on port 8080")
})