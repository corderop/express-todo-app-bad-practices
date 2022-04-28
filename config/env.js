import dotenv from "dotenv"

dotenv.config()

const NODE_ENV = process.env.NODE_ENV || "development"
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/"

export { NODE_ENV, PORT, MONGODB_URI }