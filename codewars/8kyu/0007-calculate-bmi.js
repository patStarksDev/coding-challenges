// https://www.codewars.com/kata/57a429e253ba3381850000fb

// Calculate BMI

// Description:

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const bmiResult = weight / height ** 2;
    if (bmiResult <= 18.5) {
        return "Underweight";
    } else if (bmiResult <= 25) {
        return "Normal";
    } else if (bmiResult <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// 2022-04-07