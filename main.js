//Array of objects 
//Converting an array of objects to JSON 
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    },
];

// forEach, map, filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true
})

console.log(todoCompleted)


