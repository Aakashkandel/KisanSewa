const jwt = require('jsonwebtoken');
const { User } = require('../Models/User');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const { Admin } = require('../Models/Admin');
const { exit } = require('process');
dotenv.config();

const AdminRegister = async (req, res) => {
    try {
        const email = "admin@admin4.com";
        const password = "admin";
        const type = "admin";
        const name = "KisanSewa Admin";


        // Create new admin
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword,
            type
        });

        await newAdmin.save();

        // Generate JWT token
        const token = jwt.sign({ id: newAdmin._id, email, role: newAdmin.type }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' });

        // Set token in cookies
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        res.cookie('token', token, options);

       console.log('Successfully registered');

    } catch (error) {
        console.error('Error during registration:', error);
        
    }
};


module.exports = { AdminRegister };
