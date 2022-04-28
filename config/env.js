import dotenv from 'dotenv'

dotenv.config()

const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 8000

export { NODE_ENV, PORT }