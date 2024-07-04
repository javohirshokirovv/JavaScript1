
let btn = document.getElementsByClassName("add")[0];

let btn2 = document.getElementsByClassName("delete")[0];

btn.addEventListener("click", addStudent);

btn2.addEventListener("click", deleteStudent);

let students = [];

function addStudent(){
    let studentName = document.getElementsByClassName("name")[0].value;
    let studentSurname = document.getElementsByClassName("surname")[0].value;
    let studentPotok = document.getElementsByClassName("potok")[0].value;
    let result = document.getElementsByClassName("result")[0];
    
    console.log(studentName, studentSurname, studentPotok);

    let studentObj = {
        name: studentName,
        surname: studentSurname,
        potok: studentPotok,
    }

    students.push(studentObj);

    console.log(students);

    result.innerHTML = '';

    for (let student of students) {
        result.innerHTML += `Имя: ${student.name} Фамилия: ${student.surname} Поток: ${student.potok}<br>`;
    };
}

function deleteStudent(){
    students = [];

    let result = document.getElementsByClassName("result")[0];
    result.innerHTML = '';

    console.log('Все студенты удалены:', students);
}