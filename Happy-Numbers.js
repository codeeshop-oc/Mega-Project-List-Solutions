// Enter the number
let num = 1232
// Saving All Numbers to check later for repetitive number
let all_num = []
// Reducing Infinite Loop Chances
let max_runtime = 5000
	
// Initiate Program
findHappyNumber(num)

function findHappyNumber(old_num) {
	--max_runtime
	if(max_runtime < 1) {
		showMessage('Un-Happy Number')
		return
	}
	let new_num = splitNumbers(old_num)
	let str_num = String(old_num)
	let last_digit = str_num.charAt(str_num.length - 1)
	let is_already_checked = all_num.includes(new_num)
	if(last_digit == 1) {
		showMessage('Happy Number')
	} else if(!is_already_checked) {
		showMessage('Process - ' + new_num)
		findHappyNumber(new_num)	
		all_num.push(new_num)
	} else {	
		showMessage('Un-Happy Number')
	}
}

function showMessage(msg) {
	console.log(msg)
}

function splitNumbers(num) {
	let temp_num = num
	let new_num = 0
	while(temp_num > 0) {
		let rem = temp_num % 10
		if(rem > 0) {
			new_num += getSquare(rem)
		}		
		temp_num = parseInt(temp_num / 10)
	}	

	return new_num
}

function getSquare(num) {
	return num * num
}
