obj = {}
console.log(obj)
person = {
    "name": "sooraj"
    , "age": 22, "address": "aluva"
}
console.log(person)
person.mobno = 8089380121
//or
person["mobno"] = 1213808094
console.log(person)

person.update = function (name) {
    person.name = name
}
console.log(person)
person.update("spk")
console.log(person)

Student = function (rollno, name, batch) {
    this.rollno = rollno
    this.name = name
    this.batch = batch
    this.display = function () {
        console.log("roll no:", this.rollno)
        console.log("name:", this.name)
        console.log("batch:", this.batch)
    }
}
Student1 = new Student(42, "PK", "CSE")
Student1.display()
localStorage.setItem("student1", JSON.stringify(Student1))
studentstr = localStorage.getItem("student1")
studentobj = JSON.parse(studentstr)
console.log(studentobj.rollno)
console.log(studentobj["name"])
person = {
    "name": "sooraj"
    , "age": 22, "address": "aluva"
}

// obj=Object.create(null)
// console.log(obj)
// student=Object.create(person)
// student.rollno=40
// console.log(student)
// console.log(student.hasOwnProperty('name'))
// console.log(student.hasOwnProperty('rollno'))
// student.__proto__.age=21
// console.log(student)
// data=Object.freeze(person)
// data.__proto__.name="Sreeraj"
// data.number=123456789
// console.log(data)
// console.log("data",Object.isFrozen(data))
// console.log("person",Object.isFrozen(person))
Object.seal(person)
person.name="Arun"
person.number=987654321
console.log(person)
console.log(Object.isSealed(person))
student={"rollno":1}
Object.assign(student,person)
console.log(student)
for(i of Object.keys(person)){
    console.log(i)
}
//or
var data=Object.create(person)
data.houseno=1
data.area="Ernakulam"
Object.keys(person).forEach(element=>{
    console.log("--",element)
})
