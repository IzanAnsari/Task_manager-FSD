const Task = require('../Models/TaskModel');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Error creating task' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    task.title = title;
    task.description = description;
    task.status = status;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Error updating task' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.destroy();
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting task' });
  }
};
