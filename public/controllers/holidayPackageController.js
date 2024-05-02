
function addHolidayPackage(packageName, durationNights, destination, location, amenities) {
    // Insert the new holiday package into the database
    const query = `INSERT INTO HolidayPackages (package_name, duration_nights, destination, location, amenities) 
                   VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [packageName, durationNights, destination, location, amenities], (err, result) => {
        if (err) {
            console.error('Error adding holiday package:', err);
            return;
        }
        console.log('Holiday package added successfully');
    });
}

// Function to edit an existing holiday package
function editHolidayPackage(packageId, packageName, durationNights, destination, location, amenities) {
    // Update the holiday package in the database
    const query = `UPDATE HolidayPackages 
                   SET package_name = ?, duration_nights = ?, destination = ?, location = ?, amenities = ? 
                   WHERE holiday_package_id = ?`;
    db.query(query, [packageName, durationNights, destination, location, amenities, packageId], (err, result) => {
        if (err) {
            console.error('Error editing holiday package:', err);
            return;
        }
        console.log('Holiday package edited successfully');
    });
}

// Function to delete an existing holiday package
function deleteHolidayPackage(packageId) {
    // Delete the holiday package from the database
    const query = `DELETE FROM HolidayPackages WHERE holiday_package_id = ?`;
    db.query(query, [packageId], (err, result) => {
        if (err) {
            console.error('Error deleting holiday package:', err);
            return;
        }
        console.log('Holiday package deleted successfully');
    });
}
