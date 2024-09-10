const { User } = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;

   
    if (username=="" || password=="") {
        return res.status(400).json({
            message: "Username and password fields are required",
            status: 0
        });
    }

    try {
        // Find the user by email or citizenship number
        const user = await User.findOne({
            $or: [
                { email:username },
                { citizenship:username }
            ]
        });

        // Check if user is found
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                status: 0
            });
        }

        // Compare password
        const isMatch =  bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password",
                status: 0
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '2h' }
        );

        // Set token in cookies
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        res.cookie('token', token, options);

        return res.status(200).json({
            message: "Successfully logged in",
            status: 1,
           name: user.name,
            token: token
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({
            message: "Internal Server Error",
            status: 0
        });
    }
};

module.exports = { login };
