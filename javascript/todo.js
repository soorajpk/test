var todolist=[];
var tomorrowlist=[];
function movetask()
{
    var elem = document.getElementById("select1");
    // if nothing selected give alert
    if (elem.selectedIndex == -1)
      {
          alert ("Please select atleast one task to move");
          return; 
      }
      
      for (i=0; i< elem.options.length; i++) 
      {

        if (elem.options[i].selected) 
        {
            
            tomorrowlist.push(elem.options[i].value); // add to tomorrows list    
            todolist.splice(todolist.indexOf(elem.options[i].value),1 ); // removes based on the position
        }

      } 
      
      buildList();    
      buildListTomorrow();
}
function addtask()
{
    
    var taskval = console.log(document.getElementById("task").value);
    todolist.push(document.getElementById("task").value); // add element to end
    console.log(document.getElementById("todolist"));

     // create a new div element 
     if (document.getElementById("div1") == null)
     {
     newDiv = document.createElement("div1"); 
     //var currentDiv = document.getElementById("todolist"); 
     //newDiv.setAttribute("class","col-sm-6");
     
     document.getElementById("todolist").appendChild(newDiv);
     //document.body.insertBefore(newDiv, currentDiv);    
     }
  
     
    
    buildList();

    
}
function buildList()
{
    console.log("length",todolist.length );
    console.log("element exist : ", document.getElementById("select1"));
    if (document.getElementById("select1") != null)
    {
        
        var elem = document.getElementById("select1");
        elem.parentNode.removeChild(elem);  
          
    }

    
    // Create the Unordered list if there are elements present in the array  
    
    var myList = document.createElement("select");
    myList.id = "select1";
    myList.multiple = "multiple";
    
    for ( var i = 0; i < todolist.length ; i ++ )    
    {
        console.log (i);
        
        // create list item for every element 
        var listItem = document.createElement("option");
        
        
        // create a text node to store value
        var listValue = document.createTextNode(todolist[i]);

        // append the value dbgxgbin the list item
        listItem.appendChild(listValue);
        
        // append the list item in the list
        myList.appendChild(listItem); 
     }
    // append the list in the container
    
    newDiv.appendChild(myList);
    
}
function buildListTomorrow()
{
    // create a new div element dbgxgb
    var newDiv = document.createElement("div2"); 

  
    document.getElementById("tmrwlist").appendChild(newDiv);
    
    if (document.getElementById("select2") != null)
    {
        
        var elem = document.getElementById("select2");
        elem.parentNode.removeChild(elem);  
          
    }
    // Create the Unordered list if there are elements present in the array  
    var myList = document.createElement("select");
    myList.id = "select2";
    myList.multiple = "multiple";
    
    
    for ( var i = 0; i < tomorrowlist.length ; i ++ )    
    {
        console.log (i);
        
        // create list item for every element 
        var listItem = document.createElement("option");
        
        
        // create a text node to store value
        var listValue = document.createTextNode(tomorrowlist[i]);

        // append the value in the list item
        listItem.appendChild(listValue);
        
        // append the list item in the list
        myList.appendChild(listItem); 
     }
    // append the list in the container
    newDiv.appendChild(myList);

}