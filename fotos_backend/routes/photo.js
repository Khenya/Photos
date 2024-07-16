const express = require('express');
const { createPhoto, getPhotoById, updatePhotoById, deletePhotoById } = require('../controllers/PhotoController');
const router = express.Router();

router.post('/', createPhoto);
router.get('/:id', getPhotoById);
router.put('/:id', updatePhotoById);
router.delete('/:id', deletePhotoById);

module.exports = router;
