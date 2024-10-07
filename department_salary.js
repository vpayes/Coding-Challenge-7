// Create a Department Structure 
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};
// Commit 
// Create a Recursive Function to Calculate Total Salary for a Department 
function calculateDepartmentSalary(department) {
    let totalSalary = employee.salary;
    for (let subordinate of employee.subordinates){
        totalDepartmentSalary += calculateDepartmentSalary(subordinate);
    }
    return totalDepartmentSalary;

  
};

const totalEngineeringSalary = calculateDepartmentSalary("Engineering");
const totalSalesSalary = calculateDepartmentSalary("Sales");

console.log(totalEngineeringSalary);
console.log(totalSalesSalary);
//Commit 
// Create a Function to Calculate the Total Salary for All Departments
function calculateCompanySalary(company) {
    let totalSalary = employee.salary;

    company.departments.forEach(department => {
        totalSalary += calculateDepartmentSalary(department);
    });

    return totalSalary;
}

const totalCompanySalary = calculateCompanySalary(company);
console.log(`Total salary for the company: $${totalCompanySalary}`);
// Commit 
