const { db } = require('../config/firebaseConfig');

const addPhoto = async (photo) => {
    const { id, title} = photo;
    try {
        await db.collection('photos').doc(id).set(photo);
        return `La foto ${title} fue agregado correctamente con ID ${id}!`;
    } catch (error) {
        console.error('Error adding document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};
const getPhoto = async (id) => {
    try {
        const photoDoc = await db.collection('photos').doc(id).get();
        if (photoDoc.exists) {
            return { id: photoDoc.id, ...photoDoc.data() };
        } else {
            throw new Error('photo not found');
        }
    } catch (error) {
        console.error('Error getting document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

const updatePhoto = async (id, updatedData) => {
    try {
        await db.collection('photos').doc(id).update(updatedData);
        return `El photo con ID ${id} fue actualizado correctamente.`;
    } catch (error) {
        console.error('Error updating document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

const deletePhoto = async (id) => {
    try {
        await db.collection('photos').doc(id).delete();
        return `El photo con ID ${id} fue eliminado correctamente.`;
    } catch (error) {
        console.error('Error deleting document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

module.exports = { addPhoto, getPhoto, updatePhoto, deletePhoto };