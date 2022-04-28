import express from "express"
import taskRoutes from "./tasks/routes"
import { indexController } from "./controllers"

const routes = express.Router()

routes.use("/tasks", taskRoutes)

routes.get("/", indexController)

export default routes