document.addEventListener('DOMContentLoaded', function() {
    
    function fetchIncentives() {
        // Fetch incentives from backend API
        fetch('/incentives')
            .then(response => response.json())
            .then(incentives => {
                // Update the UI with incentives data
                const incentivesList = document.getElementById('incentives-list');
                incentivesList.innerHTML = ''; // Clear previous data
                incentives.forEach(incentive => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Sales Count: ${incentive.salesCount}, Incentive: ${incentive.incentive}`;
                    incentivesList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching incentives:', error);
            });
    }

    // Function to handle login form submission
    function handleLogin(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Send login request to backend API
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (response.ok) {
                // Login successful, fetch incentives
                fetchIncentives();
            } else {
                throw new Error('Login failed');
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
    }

    // Add event listener to login form
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', handleLogin);

    // Fetch incentives when the page loads
    fetchIncentives();
});
