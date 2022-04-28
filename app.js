import express from "express"
import mongoose from "mongoose"
import * as env from "./config/env"
import routes from "./src/routes"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

await mongoose.connect(env.MONGODB_URI)

app.use("/", routes)

app.listen(env.PORT, () => console.log(`Example app running! at port ${env.PORT}`))

