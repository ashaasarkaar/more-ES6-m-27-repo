// filter ar khalato vai find
//difference between filter vs find
//filter hosche ai shorto fullFill jottogulo upadan korbe, sob gulo k dibe, find shudhu prothom mathching ta dibe, j ta shorto ta fulFill korbe r jodi find kono tai khuje na pai tahole undefined dibe

const students = [
    {name: 'bablu', age: 40},
    {name: 'Tablu', age: 31},
    {name: 'Dhablu', age: 29},
    {name: 'Jambu', age: 41},
    {name: 'Jilapi', age: 33}
];
const aduVaiStudents = students.find(std => std.name === 'hablu');
console.log(aduVaiStudents);
const aduVaiStudents2 = students.find(std => std.name === 'bablu');
console.log(aduVaiStudents2);

const aduVaiStudents3 = students.find(std => std.name[0] === 'J');
console.log(aduVaiStudents3);

// filter jodi kono shorto fullFill na kore tahole empty array dibe, j khane find undefined dibe