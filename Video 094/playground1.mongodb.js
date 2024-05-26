// Select the database to use.
use('web-dev-course');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    
        {"name": "Java", "Price": 30000, "Instructor": "Suryansh"},
        {"name": "Python", "Price": 25000, "Instructor": "Aman"},
        {"name": "JavaScript", "Price": 20000, "Instructor": "Ravi"},
        {"name": "C++", "Price": 28000, "Instructor": "Priya"},
        {"name": "Ruby", "Price": 26000, "Instructor": "Neha"},
        {"name": "PHP", "Price": 22000, "Instructor": "Rahul"},
        {"name": "Swift", "Price": 27000, "Instructor": "Ramesh"},
        {"name": "Kotlin", "Price": 29000, "Instructor": "Sneha"},
        {"name": "Scala", "Price": 31000, "Instructor": "Vikas"},
        {"name": "Go", "Price": 32000, "Instructor": "Anita"},
        {"name": "R", "Price": 23000, "Instructor": "Saurabh"},
        {"name": "Perl", "Price": 21000, "Instructor": "Kiran"},
        {"name": "Rust", "Price": 33000, "Instructor": "Mohan"},
        {"name": "Haskell", "Price": 34000, "Instructor": "Divya"},
        {"name": "TypeScript", "Price": 24000, "Instructor": "Nitin"},
        {"name": "Dart", "Price": 25000, "Instructor": "Rohit"},
        {"name": "Objective-C", "Price": 26000, "Instructor": "Vandana"},
        {"name": "SQL", "Price": 20000, "Instructor": "Anil"},
        {"name": "MATLAB", "Price": 30000, "Instructor": "Akash"},
        {"name": "Julia", "Price": 31000, "Instructor": "Nisha"}
    
    
]);

// Print a message to the output window.
console.log(`Done inserting data!`);

