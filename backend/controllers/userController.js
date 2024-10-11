const User = require('../models/userModel');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

// For sign up
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10); 
        const hash = await bcrypt.hash(password, salt); 

        const user = new User({ name, email, password: hash });
        await user.save();

        const token = createToken(user._id);
        return res.status(201).json({ success: true, token, message: "User registered successfully. You can log in now." }); 
    } catch (error) {
        console.error("Registration error:", error); 
        return res.status(500).json({ error: "Some error occurred" });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Validate password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      // Generate token if password is valid
      const token = createToken(user._id, 'user');
      return res.status(200).json({
        success: true,
        token,
      });
    } catch (error) {
      console.error(error); 
      res.status(400).json({ error: "Something went wrong" });
    }
  };
  
  

module.exports = {register,loginUser}
