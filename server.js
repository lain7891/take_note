const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

// create instance of express
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes to get back the HTML Files
app.get("/api/config", (req, res)=>{
    res.json({
        success: true
    });
});

// HTML VIEWS ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});



// listen on the port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
