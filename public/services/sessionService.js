
function loginUser(req, res) {
    const { username, password } = req.body;

    authenticateUser(username, password, (err, user) => {
        if (err) {
            res.status(401).json({ error: err });
            return;
        }
        // Set user session data
        req.session.user = user;
        res.json({ message: 'Login successful', user: user });
    });
}

// Function to handle user logout
function logoutUser(req, res) {
    // Destroy the session to log out the user
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ error: 'Logout failed' });
            return;
        }
        res.json({ message: 'Logout successful' });
    });
}
