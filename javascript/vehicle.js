function loadTime() {
    document.getElementById('time')
        .value = new Date().toLocaleTimeString()
}
function Vehicle(no, time, hrs) {
    this.vno = no
    this.time = time
    this.hrs = hrs
}
var vehiclelist = []
function save() {
    var no = document.getElementById('no').value
    var time = document.getElementById('time').value
    var hrs = document.getElementById('hrs').value
    var vehicle = new Vehicle(no, time, hrs)
    if (vehiclelist.length < 4) {
        vehiclelist.push(vehicle)
        console.log(vehiclelist)
    }
    else {
        alert("slot is full")
    }
}
function show() {
    document.getElementById('show')
        .style.display = "block"
}
function remove() {
    var vno = document.getElementById('vno').value
    vehiclelist.forEach((obj) => {
        if (obj.vno == vno) {
            var index = vehiclelist.indexOf(obj)
            vehiclelist.splice(index, 1)
            alert('Removed')
            console.log(vehiclelist)
        }
    })
    function view() {
        var list = document.createElement("ul")
        for (i of vehiclelist){
            child = document.createTextNode(i.vno + "\n" + i.hrs)
        list.appendChild(child)
    }
    document.getElementById("demo").appendChild(list)
    }
}