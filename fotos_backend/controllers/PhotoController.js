const { addPhoto, getPhoto: fetchPhoto, updatePhoto: modifyPhoto, deletePhoto: removePhoto } = require('../services/PhotoService');

const createPhoto = async (req, res) => {
    const photo = req.body;
    try {
        const message = await addPhoto(photo);
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPhotoById = async (req, res) => {
    const { id } = req.params;
    try {
        const photo = await fetchPhoto(id);
        res.json(photo);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const updatePhotoById = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const message = await modifyPhoto(id, updatedData);
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deletePhotoById = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await removePhoto(id);
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { createPhoto, getPhotoById, updatePhotoById, deletePhotoById };
