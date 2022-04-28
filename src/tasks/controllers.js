
function indexController(req, res) {
    return res.json({ data: todoItems, status: "success" })
}

function addItemController(req, res) {
    todoItems.push({
        index: index++,
        value: req.body.value,
        done: false,
    })
    return res.json({ data: todoItems, status: 'success' })
}

function deteleItemController(req, res) {
    var todoItems = todoItems.filter(d => d.index != +req.params.id)
    return res.json({ data: todoItems, status: 'success' })
}

function updateController(req, res) {
    todoItems.filter(d => d.index == +req.params.id)[0].done = req.body.done
    return res.json({ data: todoItems, status: 'success' })
}

export { 
    indexController, 
    addItemController, 
    deteleItemController, 
    updateController 
}