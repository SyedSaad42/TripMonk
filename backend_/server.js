import express from "express";
import dotenv from "dotenv";
import { connectdb } from './lib/db.js'
import route from "./Router/flightsearch.route.js"
dotenv.config();
const app = express();
const PORT = 4000;
app.use(express.json());


app.use("/flight",route);

// now we create the result we will get once we hit the subkit button

app.get("/", (req, res) => {
    res.send("Home route working!");
  });
  
app.listen(PORT,()=>{
    connectdb();
  console.log("Server is running on http://localhost:" + PORT)
    
})