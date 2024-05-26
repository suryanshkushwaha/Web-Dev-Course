use('crudDB');

db.createCollection('courses')

db.courses.insertOne({
    name: "Best web dev",
    price: 10,
    assignment: 12,
    projects: 43
})

db.courses.insertMany([
    {
        "name": "Best web dev",
        "price": 0,
        "assignment": 12,
        "projects": 43
    },
    {
        "name": "Advanced web dev",
        "price": 0,
        "assignment": 10,
        "projects": 40
    },
    {
        "name": "Full Stack Mastery",
        "price": 0,
        "assignment": 15,
        "projects": 50
    },
    {
        "name": "Frontend Essentials",
        "price": 0,
        "assignment": 8,
        "projects": 30
    },
    {
        "name": "Backend Pro",
        "price": 0,
        "assignment": 14,
        "projects": 45
    },
    {
        "name": "JavaScript Ninja",
        "price": 0,
        "assignment": 9,
        "projects": 35
    },
    {
        "name": "React Developer",
        "price": 0,
        "assignment": 11,
        "projects": 38
    },
    {
        "name": "Vue.js Expert",
        "price": 0,
        "assignment": 13,
        "projects": 42
    },
    {
        "name": "Node.js Specialist",
        "price": 0,
        "assignment": 10,
        "projects": 37
    },
    {
        "name": "CSS Masterclass",
        "price": 0,
        "assignment": 7,
        "projects": 25
    }
]
)

let a = db.courses.find({price:0})

console.log(a.count())


db.courses.updateMany({price:0}, {$set:{price:100}})

db.courses.deleteMany({price:100})