function Student(rollno,name,age,marks){
    this.Rollno=rollno
    this.Name=name
    this.Age=age
    this.Marks=marks
    this.details=function(){
        console.log("Name:",this.Name)
        console.log("Rollno",this.Rollno)
        console.log("Age",this.Age)
    }
    this.average=function(){
        sum=0
        for(i of this.Marks){
            sum+=i
        }
        alert("Eid="+employee.empid+"\n"+"name="+employee.Name+"\n"+"salary="+employee.salary)        avg=sum/this.Marks.length
        console.log(avg)
    }
}
var s1=new Student("42","sooraj","22",[99,95,92])
s1.average()
s1.details()

var s2=new Student("43","spk","23")
console.log(s1)
console.log(s1.Age)
console.log(s2.Name)
console.log(typeof s1)

var productlist=[]

function Product(pid,pname,price){
    this.pid=pid
    this.pname=pname
    this.price=price
    this.detail=function(){
        console.log("ID:",this.pid)
        console.log("Product Name:",this.pname)
        console.log("Price:",this.price)
    }
    this.incprice=function(amount){
        this.price=this.price+amount
        console.log("The updated price is",this.price)
    }
}

var p1=new Product("123","Pen",10)
p1.detail()
p1.incprice(10)

function getvalues(){
    var pid=document.getElementById('pid').value
    var pname=document.getElementById('pname').value
    var price=document.getElementById('price').value
    var p=new Product(pid,pname,price)
    //json to string    
    pstr=JSON.stringify(p)
    console.log("string object",pstr)
    //string to object
    data=JSON.parse(pstr)
    console.log(data["Name"])
    console.log(data.Name)          
    // alert(p.pid+" "+p.pname+" "+p.price)
    productlist.push(p)
    console.log(productlist)
    for(obj of productlist){
        //console.log(obj)
        // console.log(obj.pid)
        // console.log(obj.pname)
        // console.log(price)
        document.getElementById('list').innerHTML="pid: "+obj.pid+"<br>Name: "+obj.pname+"<br>Price: "+obj.price
    }
    var newdiv=document.createElement('p')
    newdiv.innerHTML="new div"
    newdiv.setAttribute("id","p1")
    document.getElementById('div1').appendChild(newdiv)
}
