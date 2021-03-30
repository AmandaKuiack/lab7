let courseList = [
    { code: 'ACIT 1515', course: 'Scripting for IT' },
    { code: 'ACIT 1620', course: 'Fundamental Web Technologies' },
    { code: 'MATH 1310', course: 'Technical Math for IT' },
];

let userInput;
do {
    userInput= prompt("Please enter the 4 digit course code: ");
} while(isNaN(userInput) === true); 
   
    console.log(input)
    let counter = 0;
    let correct = true;
    for (let i=0; i<courseList.length; i++){
        let word = courseList[i].code
        if(word.includes(userInput) === true) {
            alert(`Yes I am taking the course ${courseList[i].code} - ${courseList[i].course}`);
            correct = true; 
            alert(word.incudes(userInput));
        } else if (word.includes(userInput) === false){
            correct = false;
        } else {
            correct = false;
        }
    }
