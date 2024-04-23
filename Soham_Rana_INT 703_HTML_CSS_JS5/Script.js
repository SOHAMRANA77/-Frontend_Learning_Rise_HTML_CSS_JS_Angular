let Mark = {
    Weight: 78,
    height: 1.69,
    Name: "Marks Miller"
};
let John = {
    Weight: 92,
    height: 1.95,
    Name: "John Smith"
};

function Display(name1, bmi1, name2, bmi2) {
    console.log(`${name1}'s BMI (${bmi1}) is higher than ${name2}'s BMI (${bmi2})`);
}

function compareBmi(name1, bmi1, name2, bmi2) {
    if (bmi1 > bmi2) {
        Display(name1, bmi1, name2, bmi2);
    } else {
        Display(name2, bmi2, name1, bmi1);
    }
}

function BMI(mass, height) {
    return mass / height ** 2;
}

compareBmi(Mark.Name, BMI(Mark.Weight, Mark.height).toFixed(2), John.Name, BMI(John.Weight, John.height).toFixed(2));
