const { json } = require("express");
const express = require("express");
const { fstat } = require("fs");
const path = require("path");
const fs = require("fs");
let notes = require("./db/db.json");

const PORT = process.env.PORT || 3000;

// create instance of express
const app = express();

// let notes = [{
//     "id": 1,
//     "message": "First reminder of the day!",
// }];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

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
    fs.readFile("./db/db.json", "utf-8", (err) => {
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
console.log(req.body);
notes.push(newNote);
// // const listOfNotes = JSON.parse(notes);
// listOfNotes.push(newNote);
// res.json(notes);
fs.writeFile("./db/db.json", JSON.stringify(newNoteArray), (err) => {
    if (err){
        throw err;
    } else {
        return res.send(newNoteArray);
    }
// })
// return res.json(listOfNotes;
// });
// notes.push(newNoteArray);
// res.json(notes);
})

app.delete("/api/notes/:id", function(req, res) {
    const chosen = req.params.id;
    const newNotes = notes.filter((note) => note.id != chosen);

    if (!newNotes) {
      response.status(500).send('Notes not found.');
    } else {
      notes = newNotes;
      response.send(notes);
    }
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err)=> {
        if (err){
            throw err;
        } else {
            res.json(chosen); 
        }
      
        console.log(chosen);
        
          });

    });
  
  
//   res.json(chosen);
//   });


// listen on the port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/index.html"))
// })