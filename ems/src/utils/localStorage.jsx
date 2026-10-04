const employees = [
    {
        "id": 1,
        "firstName": "Rahul",
        "email": "e@e.com",
        "password": "123",
        "taskNumbers": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Login Page",
                "taskDescription": "Create a responsive login page with email and password fields.",
                "taskDate": "2026-10-02",
                "category": "Frontend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Build Authentication API",
                "taskDescription": "Develop backend APIs for employee login and authentication.",
                "taskDate": "2026-10-03",
                "category": "Backend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create Database Schema",
                "taskDescription": "Design the database schema for employees and tasks.",
                "taskDate": "2026-09-28",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix Dashboard UI",
                "taskDescription": "Fix alignment and responsiveness issues on the employee dashboard.",
                "taskDate": "2026-10-04",
                "category": "Frontend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Deploy Application",
                "taskDescription": "Deploy the application to the production server.",
                "taskDate": "2026-09-25",
                "category": "Deployment"
            }
        ]
    },

    {
        "id": 2,
        "firstName": "Amit",
        "email": "employee2@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement User Search",
                "taskDescription": "Add a search feature to find employees by name or email.",
                "taskDate": "2026-10-02",
                "category": "Frontend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Employee API",
                "taskDescription": "Create REST APIs for retrieving employee information.",
                "taskDate": "2026-10-05",
                "category": "Backend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Write API Documentation",
                "taskDescription": "Document all employee-related API endpoints.",
                "taskDate": "2026-09-29",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Add Form Validation",
                "taskDescription": "Add validation for employee registration forms.",
                "taskDate": "2026-10-06",
                "category": "Frontend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix API Bug",
                "taskDescription": "Investigate and fix an issue with the employee API.",
                "taskDate": "2026-09-27",
                "category": "Backend"
            }
        ]
    },

    {
        "id": 3,
        "firstName": "Vikas",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Admin Dashboard",
                "taskDescription": "Build the dashboard interface for administrators.",
                "taskDate": "2026-10-03",
                "category": "Frontend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement Task API",
                "taskDescription": "Create APIs for creating, updating and deleting tasks.",
                "taskDate": "2026-10-04",
                "category": "Backend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Setup Project Structure",
                "taskDescription": "Set up the initial folder structure and project configuration.",
                "taskDate": "2026-09-26",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Add Task Filters",
                "taskDescription": "Add filters for active, completed and failed tasks.",
                "taskDate": "2026-10-07",
                "category": "Frontend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Optimize Database Queries",
                "taskDescription": "Improve database queries to reduce response time.",
                "taskDate": "2026-09-30",
                "category": "Database"
            }
        ]
    },

    {
        "id": 4,
        "firstName": "Arjun",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Build Profile Page",
                "taskDescription": "Create an employee profile page showing personal and work details.",
                "taskDate": "2026-10-02",
                "category": "Frontend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement JWT Authentication",
                "taskDescription": "Add JWT-based authentication to secure the application.",
                "taskDate": "2026-10-05",
                "category": "Backend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create Login Component",
                "taskDescription": "Develop the login component and connect it with the backend.",
                "taskDate": "2026-09-24",
                "category": "Frontend"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Add Logout Functionality",
                "taskDescription": "Implement secure logout functionality for employees.",
                "taskDate": "2026-10-06",
                "category": "Backend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix Authentication Bug",
                "taskDescription": "Resolve an issue causing users to be logged out unexpectedly.",
                "taskDate": "2026-09-28",
                "category": "Bug Fix"
            }
        ]
    },

    {
        "id": 5,
        "firstName": "Rohit",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Task Component",
                "taskDescription": "Build a reusable component to display employee tasks.",
                "taskDate": "2026-10-02",
                "category": "Frontend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Connect Frontend with API",
                "taskDescription": "Connect the frontend task dashboard with backend APIs.",
                "taskDate": "2026-10-04",
                "category": "Integration"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create Task Model",
                "taskDescription": "Create the database model for storing employee tasks.",
                "taskDate": "2026-09-27",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement Task Status",
                "taskDescription": "Add functionality to update task status from the dashboard.",
                "taskDate": "2026-10-05",
                "category": "Backend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix Dashboard Error",
                "taskDescription": "Find and resolve errors occurring on the employee dashboard.",
                "taskDate": "2026-09-29",
                "category": "Bug Fix"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Rajesh",
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin};
}