
const express = require('express');
const mysql = require('mysql');


const app = express();
const port = 3006; 
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'root@1234', 
    database: 'hyscalar' 
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        // throw err;
        console.error('Error connecting to MySQL database:', err);
    }
    console.log('Connected to MySQL database');
});

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Incentive Management System');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const incentiveController = require('./controllers/incentiveController');
const holidayPackageController = require('./controllers/holidayPackageController');

// Route to calculate incentives based on sales performance
app.get('/calculate-incentive/:salesCount', (req, res) => {
    const salesCount = req.params.salesCount;
    const incentives = incentiveController.calculateIncentive(salesCount);
    res.json(incentives);
});

// Routes for holiday package management
app.post('/holiday-packages', (req, res) => {
    const { packageName, durationNights, destination, location, amenities } = req.body;
    holidayPackageController.addHolidayPackage(packageName, durationNights, destination, location, amenities);
    res.json({ message: 'Holiday package added successfully' });
});

app.put('/holiday-packages/:packageId', (req, res) => {
    const packageId = req.params.packageId;
    const { packageName, durationNights, destination, location, amenities } = req.body;
    holidayPackageController.editHolidayPackage(packageId, packageName, durationNights, destination, location, amenities);
    res.json({ message: 'Holiday package edited successfully' });
});

app.delete('/holiday-packages/:packageId', (req, res) => {
    const packageId = req.params.packageId;
    holidayPackageController.deleteHolidayPackage(packageId);
    res.json({ message: 'Holiday package deleted successfully' });
});

// Route for user login
app.post('/login', incentiveController.loginUser);

// Route for user logout
app.post('/logout', incentiveController.logoutUser);
