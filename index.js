const express = require("express");

const PORT = 8000;

const app = express();
const router = require("./router");


app.use(router);




app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});