const express = require("express");

const PORT = process.env.PORT || 3000;

// create instance of express
const app = express();







// listen on the port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
