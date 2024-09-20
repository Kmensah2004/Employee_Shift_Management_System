const employees = [ {  name: 'Dejalie', 
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