const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    // if (!tasks) {
    //   throw new Error('No tasks found');
    // }
    // return res.status(200).json({ success: true, data: tasks });
    res.status(500).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
    // res.send('all items from file');
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    // res.status(201).json({ task });
    // res.json(req.body);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  // res.json({ id: req.params.id });
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    //console.log(task);//null if _id not found with number of characters(digits)
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
    // res.status(200).send()
    //res.status(200).json({task:null,status:'success'})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.json({ id: req.params.id });
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    // this is not the way
    // const { name, completed } = req.body;
    // const task = await Task.findOneAndUpdate(
    //   { _id: taskID },
    //   { name: 'correct trimming' }
    // );

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      // overwrite: true, // in case of put we have to add this only and this will do complete not for that specific
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
