// Made by Erik, Rom, Jeanne, Michelle, Tracy

// Employee arrays
var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

// Log the results of makeBonusArray for each employee
document.getElementById("employee 1").innerHTML = formatBonusString(makeBonusArray(arrayAtticus));
document.getElementById("employee 2").innerHTML = formatBonusString(makeBonusArray(arrayScout));
document.getElementById("employee 3").innerHTML = formatBonusString(makeBonusArray(arrayJem));
document.getElementById("employee 4").innerHTML = formatBonusString(makeBonusArray(arrayBoo));

// Takes in an employee array and returns data about their bonus and total adjusted income
function makeBonusArray(employee){
	// Make an empty array to hold the data we'll be calculating
	var bonusArray = [];
	// Get the employee name and pass it into the new array
	bonusArray[0] = employee[0];
	// Calculate the bonus % using calculateSTI
	bonusArray[1] = calculateSTI(employee);
	// Calculate the bonus the employee will receive and round it to the nearest dollar
	console.log(employee[0] + "'s bonus = " + bonusArray[1] + " (bonus % as decimal) * " + employee[2] + " (salary).");
	bonusArray[3] = Math.round(bonusArray[1] * employee[2]);
	// Calculate the total adjusted salary by adding the annual salary to the calculated bonus
	console.log(employee[0] + "'s total adjusted income = " + bonusArray[1] + " (bonus) * " + employee[2] + " (salary).");
	bonusArray[2] = parseInt(employee[2]) + bonusArray[3];
	return bonusArray;
}

// Calculate the bonus % as a decimal for an employee
function calculateSTI(employee){
	var bonus;
	// Bonus will be represented as a decimal percentage
	// Bonus is based on employee rating out of 5
	switch(employee[3]) {
		case 5:
			bonus = .10;
			break;
		case 4:
			bonus = .06;
			break;
		case 3:
			bonus = .04;
			break;
		// 2 stars or lower receive no bonus
		default:
			console.log(employee[0] + " has a low rating of " + employee[3] + ", so they will not receive a bonus.");
			return 0;
	}
	console.log(employee[0] + " has a rating of " + employee[3] + ", so they start with a base bonus of: " + bonus * 100 + "%.");
	// An employee number with a 4-digit number has been there longer, so they get a bonus
	if(employee[1].length == 4){
		bonus += .05;
		console.log(employee[0] + " has a 4-digit ID number, so they receive an additional 5% for a total of " + bonus * 100 + "%.");
	}
	// If an employee is making a lot of money, their bonus is slightly reduced
	if(employee[2] > 65000){
		bonus -= .01;
		console.log(employee[0] + " is making over $65,000, so their bonus is reduced by 1% for a total of " + bonus * 100 + "%.");
	}
	// A bonus can't be larger than 13%
	if(bonus > .13) {
		console.log(employee[0] + " has a bonus of " + bonus * 100 + "%, but the highest a bonus can be is 13%, so their bonus has been reduced to 13%.");
		bonus = .13;
	}
	return bonus;
}

function formatBonusString(bonusArray) {
	return bonusArray[0] + " has a " + Math.round(bonusArray[1] * 100) + "% bonus of $" + bonusArray[3] + " for a total salary of $" + bonusArray[2] + ".";
}




