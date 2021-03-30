let courseList = [
    { code: 'ACIT 1515', course: 'Scripting for IT' },
    { code: 'ACIT 1620', course: 'Fundamental Web Technologies' },
    { code: 'MATH 1310', course: 'Technical Math for IT' },
];

let correct = false;
let userInput = prompt("Please enter the 4 digit course code: ")
for (let i=0; i<courseList.length; i++) {
    if (courseList[i].code.includes(userInput)){
        correct = true
    } 
}
if (correct === true) {
    for(let item of courseList){
        if(item.code.includes(userInput) === true) {
            alert(`Yes I am taking the course ${item.code} - ${item.course}`);
        }
    }
} 
else if(correct === false){
    courseList.push({code: userInput, course: null});
        console.log(`${userInput} successfully added into Course List`);
    }
