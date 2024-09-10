const jwt = require('jsonwebtoken');
const validator = require('validator');
const { User } = require('../Models/User');
const bcrypt=require('bcrypt');
const cookieParser = require('cookie-parser');
const dotenv=require('dotenv');
dotenv.config();

const store = async (req, res) => {
    const { name, email, phone, citizenship, password, confirm_password } = req.body;

    // Check for empty fields
    if (validator.isEmpty(phone)) {
        return res.status(400).json({
            message: "Phone field is empty",
            status: 0
        });
    }

    if (validator.isEmpty(email)) {
        return res.status(400).json({
            message: "Email field is empty",
            status: 0
        });
    }

    if (validator.isEmpty(password)) {
        return res.status(400).json({
            message: "Password field is empty",
            status: 0
        });
    }

    if (validator.isEmpty(confirm_password)) {
        return res.status(400).json({
            message: "Confirm password field is empty",
            status: 0
        });
    }

    if (validator.isEmpty(citizenship)) {
        return res.status(400).json({
            message: "Citizenship field is empty",
            status: 0
        });
    }

    // Validate email
    if (!validator.isEmail(email)) {
        return res.status(400).json({
            message: "Email is not valid",
            status: 0
        });
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
        return res.status(400).json({
            message: "Phone number must contain exactly 10 digits",
            status: 0
        });
    }

    // Check if passwords match
    if (password !== confirm_password) {
        return res.status(400).json({
            message: "Passwords do not match",
            status: 0
        });
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@!#$%^&*()_+={}\[\]:;"'<>,.?/]{1,15}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            message: "Password must be 1-15 characters long, contain at least one uppercase letter, one lowercase letter, and one digit.",
            status: 0
        });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                status: 0
            });
        }

        // Create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newRegister = new User({
            name,
            email,
            phone,
            citizenship,
            password: hashedPassword
        });

        await newRegister.save();

        // Generate JWT token
        const token = jwt.sign({ id: newRegister._id, email, role: newRegister.role },process.env.JWT_SECRET_KEY, { expiresIn: '2h' });

        // Set token in cookies
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        res.cookie('token', token, options);

        return res.status(201).json({
            message: "Successfully registered",
            status: 1,
            data: {
                id: newRegister._id,
                name: newRegister.name,
                email: newRegister.email,
                phone: newRegister.phone,
                citizenship: newRegister.citizenship,
                role: newRegister.role
            },
            token:token
        });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({
            message: "Internal Server Error",
            status: 0
        });
    }
};

module.exports = { store };
