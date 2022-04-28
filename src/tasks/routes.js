import express from "express"
import { 
    addItemController,
    deteleItemController, 
    indexController, 
    updateController 
} from "./controllers"

const routes = express.Router()

routes.get("/", indexController)
routes.post("/", addItemController)
routes.delete("/:id", deteleItemController)
routes.patch("/:id", updateController)

export default routes