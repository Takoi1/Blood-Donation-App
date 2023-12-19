const User = require('../Model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });
exports.signup = async (req, res) => {
  try {
       const {
      nom,
      prenom,
      date,
      telephone,
      email,
      password,
      codepostal,
      nomadresse,
      emailcenter,
      phonecenter,
      typedesang,
      role,
      isAdminAccepted

    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      nom,
      prenom,
      date,
      telephone,
      email,
      emailcenter,
      phonecenter,
      password: hashedPassword,
      codepostal,
      nomadresse,
      typedesang,
      pdfPath: req.file.path,
      role,
      isAdminAccepted
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if(user.isAdminAccepted){
    
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (isPasswordValid) {
      const token = jwt.sign({ email: user.email, userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      
      return res.status(200).json({ message: 'Authentication successful', token:token,role:user.role});
    }
  }
   else {
    return res.status(401).json({ message: 'You need to get Approved from the support' });
  }
};
// create user
exports.create = async (req, res) => {
  try {
    const user = new User({
      nom: req.body.nom,
      prenom: req.body.prenom,
      date: req.body.date,
      telephone: req.body.telephone,
      email: req.body.email,
      nomadresse: req.body.nomadresse,
      password: req.body.password,
      emailcenter: req.body.emailcenter,
      phonecenter : req.body.phonecenter,
      codepostal: req.body.codepostal,
      typedesang: req.body.typedesang,
      pdfPath: req.body.pdfPath,
      role:req.body.role,
      isAdminAccepted: false,
    });

    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get all users
exports.read = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//update user
exports.update = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//delete one user
exports.delete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete all users
exports.deleteall = async (req, res) => {
  try {
    await User.deleteMany({});

    res.status(200).json({ message: 'All users deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//display one user
exports.getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get all users whose account has been accepted by the admin

exports.getAllAcceptedUsers = async (req, res) => {
  try {
    const users = await User.find({ isAdminAccepted: true });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users whose account has not been accepted by the admin
exports.getAllUnapprovedUsers = async (req, res) => {
  try {
    const users = await User.find({ isAdminAccepted: false });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};