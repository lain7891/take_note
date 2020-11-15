const { json } = require("express");
const express = require("express");
const { fstat } = require("fs");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

// create instance of express
const app = express();

let notes = [];

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

// API ROUTES
app.get("/api/notes", (req, res) => {
    // read file
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err){
            throw err;
        } else {
            return res.json(notes)
        }
    })
// return res.json(notes)
});

app.post("/api/notes", (req,res) => {
let newNote = req.body;
// notes.push(newNote);
fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
    if (err){
        throw err;
    } else {
        return res.json(newNote)
    }
})
// return res.json(notes)
});
// res.json(newNote);
// })

app.delete("/api/notes/:id", function(req, res) {
    var chosen = req.params.id;
    if (err){
        throw err;
    } else {
        res.json(chosen); 
    }
  
    console.log(chosen);
    
      });
  
  
//   res.json(chosen);
//   });


// listen on the port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
