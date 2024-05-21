const express= require("express")
const morgan = require ("morgan")

const app = express();


app.use(express.json()),
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3600);

app.use("/api/email",require("./routes/email.routes"))

module.exports = app