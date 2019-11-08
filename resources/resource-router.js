const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
   Resources.get()
      .then(resources => {
         res.status(200).json(resources);
      })
      .catch(err => {
         res.status(500).json({ Error: 'Could Not Retrieve All Data.' });
      });
});

router.get('/:id', (req, res) => {
   const id = req.params.id;

   Resources.getById(id)
      .then(resource => {
         if (resource) {
            res.status(200).json(resource);
         } else {
            res.status(400).json({
               Error: 'Could Not Find The Data With Given ID'
            });
         }
      })
      .catch(err => {
         res.status(400).json({
            Error: 'Could Not Find The Resource with Given ID'
         });
      });
});

router.post('/', (req, res) => {
   const resource = req.body;

   Resources.add(resource)
      .then(item => {
         res.status(201).json({ message: 'Resource Added to Database' });
      })
      .catch(err => {
         res.status(500).json({ Error: 'Failed to create new resource' });
      });
});

module.exports = router;
