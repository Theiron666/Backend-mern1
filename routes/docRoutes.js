const express = require("express");
const router = express.Router();
const { getDocs, getDoc, setDoc, updateDoc, deleteDoc } = require('../controllers/DocController');

// router.route('/').get(getDocs).post(setDoc);
// router.route('/:id').get(getDoc).delete(deleteDoc).put(updateDoc);

router.get('/', getDocs)
router.get('/:id', getDoc)
router.post('/', setDoc)
router.put('/:id', updateDoc)
router.delete('/:id', deleteDoc)

module.exports = router;
