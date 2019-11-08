const express = require('express');

const Tasks = require('./task-model');

const router = express.Router();

router.get('/', (req, res) => {
   Tasks.get()
      .then(tasks => {
         const newTask = [];
         tasks.forEach(t => {
            if (t.task_completed === 0) {
               t = { ...t, task_completed: false };
               newTask.push(t);
            }
         });
         res.status(200).json(newTask);
      })
      .catch(err => {
         res.status(500).json({ Error: 'Could Not Retrieve All Data.' });
      });
});

router.get('/:id', (req, res) => {
   const id = req.params.id;

   Tasks.getById(id)
      .then(task => {
         if (task) {
            res.status(200).json(task);
         } else {
            res.status(400).json({
               Error: 'Could Not Find The Data With Given ID'
            });
         }
      })
      .catch(err => {
         res.status(400).json({
            Error: 'Could Not Find The Task with Given ID'
         });
      });
});

router.post('/', (req, res) => {
   const task = req.body;
   const id = req.params.id;

   Tasks.addTask(task)
      .then(item => {
         res.status(201).json({ message: 'Task Added to Database' });
      })
      .catch(err => {
         res.status(500).json({ Error: 'Failed to create new task' });
      });
});

module.exports = router;
