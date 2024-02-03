const express = require("express")
const connectDB = require("./utils/db")
const dotenv = require("dotenv");
const cors = require("cors")
const path = require("path")

dotenv.config();
// rest object 
const app = express();
connectDB();


app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", require("./routers/authRoute"))


app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})