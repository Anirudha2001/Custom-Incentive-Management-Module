
function authenticateUser(username, password, callback) {
    // Check if username and password match a user in the database
    const query = `SELECT * FROM UserAccounts WHERE username = ? AND password_hash = ?`;
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error authenticating user:', err);
            callback(err, null);
            return;
        }
        if (results.length === 1) {
            // User authentication successful
            const user = {
                user_id: results[0].user_id,
                username: results[0].username,
                email: results[0].email,
                role: results[0].role
            };
            callback(null, user);
        } else {
            // User authentication failed
            callback('Invalid username or password', null);
        }
    });
}
