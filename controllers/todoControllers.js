const Todo  = require('../models/Todo');
const { v4: uuidv4 } = require('uuid');
const addTask = async (req, res) => {
    const { title, description } = req.body;
    console.log(title, description);
    const todoid = uuidv4();
    const data = await Todo.create({ title, description, todoid });
    if(data) {
        res.redirect('/api/v1/getTodos');
    } else alert("error");
}

const getTodos = async (req, res) => {
    let todos = await Todo.find();
    res.render("todopage", {
        todos
    });
}

const deleteTodo = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const data = await Todo.deleteOne({todoid:id});
    if(data) {
        res.redirect("/api/v1/getTodos");
    } else alert("Error");

}

const updateTodo = async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findOne({todoid:id});
    // console.log(id, todo);
    res.render("updateTodo", {
        todo
    });
}

const updateTodo1 = async (req, res) => {
    const { title, description, todoid } = req.body;
    const updatedData = await Todo.updateOne({todoid}, { title, description, todoid });
    if(updatedData) {
        res.redirect("/api/v1/getTodos");
    } else alert('error');
}
module.exports = { addTask, getTodos, deleteTodo, updateTodo, updateTodo1 }