const Event = require('../Model/event');
const User = require('../Model/user'); // Assuming the path to the User model is '../Model/user'

exports.create = async (req, res) => {
  try {
  const { name,datedebut, datefin, lieu, parrainer, userId } = req.body;

    // Validate that the datedebut does not exceed the datefin
    if (datedebut > datefin) {
      res.status(400).json({ message: 'The datedebut cannot exceed the datefin' });
      return;
    }

    // Check if the user with the provided userId exists
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const event = new Event({
      name,
      datedebut,
      datefin,
      lieu,
      parrainer,
      user: user._id, // Set the user field with the ObjectId of the specified user
    });

    await event.save();

    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.readAll = async (req, res) => {
  try {
    // Populate the 'user' field to replace the ObjectId with the actual user document
    const events = await Event.find().populate('user');

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.readById = async (req, res) => {
  try {
    // Populate the 'user' field to replace the ObjectId with the actual user document
    const event = await Event.findById(req.params.id).populate('user');

    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.readByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user with the provided userId exists
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Find events associated with the user
    const events = await Event.find({ user: user._id });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    await Event.deleteMany({});

    res.status(200).json({ message: 'All events deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateById = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};