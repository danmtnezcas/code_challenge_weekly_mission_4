const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Student API welcome!"});
});

app.listen(port, () => {
    console.log(`Student API in localhost:${port}`);
});