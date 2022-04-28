
function indexController(req, res) {
    try {
        tasks = TasksService().getAllTasks(req.params.id)
    }
    catch(err){
        // Manage errors and return proper response
    }
    
    return res.status(200).send(tasks)
}

function addItemController(req, res) {
    try {
        TasksService().addTask(req.body)
    }
    catch(err){
        // Manage errors and return proper response
    }
    
    return res.status(200).send({...})
}

function deteleItemController(req, res) {
    try {
        TasksService().deleteTask(req.params.id)
    }
    catch(err){
        // Manage errors and return proper response
    }
    
    return res.status(200).send({...})
}

function updateController(req, res) {
    try {
        TasksService().updateTask(req.params.id, req.body)
    }
    catch(err){
        // Manage errors and return proper response
    }
    
    return res.status(200).send({...})
}

export { 
    indexController, 
    addItemController, 
    deteleItemController, 
    updateController 
}