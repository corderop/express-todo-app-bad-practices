// === imports == //
import express from 'express'
import mongoose from 'mongoose'
import * as env from './config/env.js'

// === initialisation == //
app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

await mongoose.connect(env.MONGODB_URI)

// === endpoints == //
// index endpoint
app.get('/', (req, res) => res.send('Hello World!'))

// get all tasks
app.get('/task', (req, res) => {
    return res.json({ data: todoItems, status: "success" })
})

// create a task
app.post('/task', (req, res) => {
    todoItems.push({
        index: index++,
        value: req.body.value,
        done: false,
    })
    return res.json({ data: todoItems, status: 'success' })
})

// delete a task
app.delete('/task/:id', (req, res) => {
    var todoItems = todoItems.filter(d => d.index != +req.params.id)
    return res.json({ data: todoItems, status: 'success' })
})

// update a task
app.patch('/task/:id', (req, res) => {
    todoItems.filter(d => d.index == +req.params.id)[0].done = req.body.done
    return res.json({ data: todoItems, status: 'success' })
})

// === run app == //
app.listen(env.PORT, () => console.log(`Example app running! at port ${env.PORT}`))