// Write a code which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

var score = 80;
if(score >= 80 && score <= 100){
    console.log("Grade A");
} else if(score >= 70 && socre <= 89){
    console.log("Grade B");
} else if(score >= 60 && score <= 69){
    console.log("Grade c");
}else if(score >= 50 && score <=59){
    console.log("Grade d");
} else{
    console.log("Grade F");
}