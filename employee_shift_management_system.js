const employees = [ {  name: 'Dejalie', // intialized employees array/list
    shifts: [ 
    { day: 'Tuesday', hours: 7 }, 
     { day: 'Thursday', hours: 5 }
        ]
    },{ 
        name: 'Pamela', 
        shifts: [
            { day: 'Monday', hours: 8 }, 
            { day: 'Wendnesday', hours: 7 }
        ]
    }, { 
        name: 'Kosi', 
        shifts: [{ day: 'Friday', hours: 6 }
        ]
    },{ 
        name: 'Raymond', 
        shifts: [ { day: 'Tuesday', hours: 4 }
        ]
    }
];
// Task 2: Create  Function to showcase Employee Shift properties
function displayEmployeeShifts(employee) {
    employee.shifts.forEach(shift => {console.log(`Employee: ${employee.name}`),
        console.log(`Day: ${shift.day}, Hours Worked: ${shift.hours}`);
    });
}
displayEmployeeShifts(employees[2]);

//Task 3
function assignShift(employeeName, day, hours) {
    const employee = employees.find(em => em.name === employeeName); // Find the employee by name
    if (employee) {
        const existshift = employee.shifts.find(shift => shift.day === day);// If employee found, check if they already have a shift that day
        if (existshift) {
            console.log(`Error: ${employeeName} already has a shift on ${day}.`);
        } else {
            employee.shifts.push({ day, hours }); // Assign new shift if no shift exists for that day
            console.log(`Assigned ${hours} hours shift to ${employeeName} on ${day}.`);
        }
    }
}

console.log("Assigning a new shift:");
assignShift('Raymond', 'Friday', 6);