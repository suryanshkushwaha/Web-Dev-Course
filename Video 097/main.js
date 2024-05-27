const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/employees.js');

const app = express();

mongoose.connect('mongodb://localhost:27017/employees')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Function to generate random data
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Endpoint to generate dummy content
app.get('/generate-dummy-content', async (req, res) => {
    const names = ["Suryansh", "Pritha", "Yogesh", "Rahul"];
    const cities = ["Lucknow", "New York", "Paris", "Stockholm"];
    const languages = ["C", "C++", "Java", "JavaScript"];

    const employees = [];

    for (let i = 0; i < 10; i++) {
        const employee = new Employee({
            name: getRandomElement(names),
            salary: Math.floor(Math.random() * 1000001), // Salary between 0 and 1000000
            language: getRandomElement(languages),
            city: getRandomElement(cities),
            isManager: Math.random() >= 0.5 // 50-50 chance of being true or false
        });

        employees.push(employee);
    }

    try {
        await Employee.deleteMany({});
        await Employee.insertMany(employees);
        res.send('10 Employee records saved');
    } catch (err) {
        console.error('Error saving employee data:', err);
        res.status(500).send('Error saving employee data');
    }
});

// Home route
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <button onclick="generateDummyContent()">Generate dummy content</button>
                <script>
                    function generateDummyContent() {
                        fetch('/generate-dummy-content')
                            .then(response => response.text())
                            .then(data => alert(data))
                            .catch(error => console.error('Error:', error));
                    }
                </script>
            </body>
        </html>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});