// Asks user for name
const user = prompt("Welcome to taxCalc. What is your name:", "");
// Asks user for the salary
const salary = parseInt(prompt(`Hey welcome to taxCalc.Enter basic salary:`, ""));
// Asks user if they have benefits
const benefits = prompt("Enter your benefits: ", "", "");

// Function that calculates the PAYE
const payeRate = function (salary) {
    if (salary < 24000) {
        return salary * 0.1;
    } else if (salary >= 24001 && salary < 32333) {
        return salary * 0.25;
    } else if (salary > 32333) {
        return salary * 0.3;
    }
}
// alert(`paye tax = ${payeRate(salary)}`);

// const benefitOptions = [
//     { benefit: "Personal Relief", monthlyLimit: 2400 },
//     { benefit: "Insurance Relief", monthlyLimit: 5000 },
//     { benefit: "Allowable Pension Fund Contribution", monthlyLimit: 20000 },
//     { benefit: "Allowable HOSP Contribution", monthlyLimit: 0 },
//     { benefit: "Affordable Housing Relief", monthlyLimit: 9000 },
//     { benefit: "Allowable Owner Occupier Interest", monthlyLimit: 25000 },
//     { benefit: "Disability Exemption", monthlyLimit: 150000 }
// ]

// for (const { benefit, monthlyLimit } of benefitOptions) {
//     if (benefit == benefits) {
//         alert(monthlyLimit);
//     }
// }

// Function that returns relief if the user has benefits
const benefitRelief = function (benefits) {
    let relief;
    switch (benefits) {
        case "Personal Relief":
            relief = 2400;
            break;
        case "Insurance Relief":
            relief = 5000;
            break;
        case "Allowable Pension Fund Contribution":
            relief = 20000;
            break;
        case "Affordable Housing Relief":
            relief = 9000;
            break;
        case "Allowable Owner Occupier Interest":
            relief = 25000;
            break;
        case "Disability Exemption":
            relief = 150000;
            break;
        default:
            "Not a benefit/relief listed";
            break;
    }

    return relief;


}

const relief = benefitRelief(benefits);
// alert(benefitRelief(benefits));


// function that calculates the nhif deduction
function nhifDeduction(salary) {
    if (salary <= 5999) {
        return 150;
    } else if (salary >= 6000 && salary <= 7999) {
        return 300;
    } else if (salary >= 8000 && salary <= 11999) {
        return 400;
    } else if (salary >= 12000 && salary <= 14999) {
        return 500;
    } else if (salary >= 15000 && salary <= 19999) {
        return 600;
    } else if (salary >= 20000 && salary <= 24999) {
        return 750;
    } else if (salary >= 25000 && salary <= 29999) {
        return 850;
    } else if (salary >= 30000 && salary <= 34999) {
        return 900;
    } else if (salary >= 35000 && salary <= 39999) {
        return 950;
    } else if (salary >= 40000 && salary <= 44999) {
        return 1000;
    } else if (salary >= 45000 && salary <= 49999) {
        return 1100;
    } else if (salary >= 50000 && salary <= 59999) {
        return 1200;
    } else if (salary >= 60000 && salary <= 69999) {
        return 1300;
    } else if (salary >= 70000 && salary <= 79999) {
        return 1400;
    } else if (salary >= 80000 && salary <= 89999) {
        return 1500;
    } else if (salary >= 90000 && salary <= 99999) {
        return 1600;
    } else if (salary > 100000) {
        return 1700;
    }
}

// alert(`${nhifDeduction(salary)}`);
// const nhif = function (nhifDeduction) {
//     return nhifDeduction(salary);
// };
// console.log(nhifDeduction(25000));
// alert(` NHIF: ${nhif}`)

// function that calculates nssf deduction
const nssfDeduction = function (salary) {
    if (salary >= 18000) {
        return 2160 / 2;
    } else {
        return 1440 / 2;
    }
};

// returns net salary
const netSalary = salary + relief - payeRate(salary) - nhifDeduction(salary) - nssfDeduction(salary)

// Returns summary of the tax calculation.
alert(`Hey ${user} here is summary of your tax Calculation:
            Salary = ${salary}
            PAYE = ${payeRate(salary)}.
            Relief = ${relief}.
            nhif Deduction = ${nhifDeduction(salary)}.
            NSSF Deduction = ${nssfDeduction(salary)}.
            Net Salary = ${netSalary}.

`)

