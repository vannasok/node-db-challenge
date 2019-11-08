const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
   Projects.get()
      .then(projects => {
         const newPro = [];
         projects.forEach(pro => {
            if (pro.pro_completed === 0) {
               pro = { ...pro, pro_completed: false };
               newPro.push(pro);
            }
         });
         res.status(200).json(newPro);
      })
      .catch(err => {
         res.status(500).json({ Error: 'Could Not Retrieve All Data.' });
      });
});

router.get('/:id', (req, res) => {
   const id = req.params.id;

   Projects.getById(id)
      .then(project => {
         if (project) {
            res.status(200).json(project);
         } else {
            res.status(400).json({
               Error: 'Could Not Find The Data With Given ID'
            });
         }
      })
      .catch(err => {
         res.status(400).json({
            Error: 'Could Not Find The project with Given ID'
         });
      });
});

router.post('/', (req, res) => {
   const project = req.body;

   Projects.add(project)
      .then(item => {
         res.status(201).json({ message: 'Project Added to Database' });
      })
      .catch(err => {
         res.status(500).json({ Error: 'Failed to create new project' });
      });
});

module.exports = router;
