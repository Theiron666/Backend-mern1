const DocModel = require("../models/DocModel");

const getDocs = async (req, res) => {
  try {
    const docs = await DocModel.find();
    res.status(200).json(docs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDoc = async (req, res) => {
  try {
    const doc = await DocModel.findById(req.params.id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const setDoc = async (req, res) => {
  try {
    const doc = await DocModel.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateDoc = async (req, res) => {
  try {
    const updateDoc = await DocModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateDoc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDoc = async (req, res) => {
  const doc = await DocModel.findById(req.params.id);

  try {
    await doc.remove();
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
};
