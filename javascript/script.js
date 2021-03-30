let courseList = [
    { code: 'ACIT 1515', course: 'Scripting for IT' },
    { code: 'ACIT 1620', course: 'Fundamental Web Technologies' },
    { code: 'MATH 1310', course: 'Technical Math for IT' },
];

let userInput;
let userInput;
do {
    userInput= prompt("Please enter the 4 digit course code: ");
} while(isNaN(userInput) === true); 
    let input = []
    for(let item of courseList){
        if(item.code.includes(userInput) === true) {
            alert(`Yes I am taking the course ${item.code} - ${item.course}`);
        } 
        