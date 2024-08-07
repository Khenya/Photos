const { initializeApp } = require('firebase-admin/app');
const { credential, firestore, auth } = require('firebase-admin');

const firebaseSetup = require('./firebase_setup.json');

initializeApp({
    credential: credential.cert(firebaseSetup),
    //databaseURL: 'https://c-photos-default-rtdb.firebaseio.com/'
});

const db = firestore();
const authInstance = auth();

module.exports = {db, authInstance};