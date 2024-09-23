import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.json('signup signup successful');
};
