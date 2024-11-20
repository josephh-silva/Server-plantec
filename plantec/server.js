const express  = require("express")
const app = express() 
const port = 3000
const cors = require("cors")
const userRouter = require("./Routes/user")
const plantsRouter = require("./Routes/plant");

app.use(express.json())
app.use(cors())


app.use("/api", userRouter)
app.use("/api", plantsRouter);

app.listen(port,()=> console.log("porta ativa"))