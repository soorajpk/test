function CreateTable(){
    var rows=prompt("enter rows")
    var col=prompt("enter rows")
    table="<table border=1px width=500px>"
     var j=1
     for( i=1;i<=rows;i++){
         table+="<tr>"
         while(j<=col){
             table+="<td>"+i*j+"</td>"
             j+= 1
        }
        table += "</tr>"
        j = 1
    }
    

    table += "</table>"
    document.getElementById('section').innerHTML=table
}
