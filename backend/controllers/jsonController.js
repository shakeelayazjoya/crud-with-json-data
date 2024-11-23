const JsonData = require("../models/jsonData");

// Get all JSON data
exports.getJsonData = async (req, res) => {
  try {
    const jsonData = await JsonData.find();
    res.status(200).json(jsonData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new JSON data
exports.createJsonData = async (req, res) => {
  const { data } = req.body;
  try {
    const newJson = new JsonData({ data });
    await newJson.save();
    res.status(201).json(newJson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update JSON data
exports.updateJsonData = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  try {
    const updatedJson = await JsonData.findByIdAndUpdate(
      id,
      { data },
      { new: true }
    );
    res.status(200).json(updatedJson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete JSON data
exports.deleteJsonData = async (req, res) => {
  const { id } = req.params;
  try {
    await JsonData.findByIdAndDelete(id);
    res.status(200).json({ message: "JSON data deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
