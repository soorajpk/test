function validate()
{
    var v_regularExp  = /\d/ ; // to find digits from 0-9.
    var patt1 = /\d+/g; // to search for all the patterns
    var username = document.getElementById("username").value;
    
     //alert(username.match(v_regularExp)); // prints only the first character
     alert(username.match(patt1)); // search for the numbers in the entire string
     alert(patt1.test(username)); // returns true or false



}
function checkinput()
{
    var patt1 = /^[a-zA-Z]+\d$/; // check whether it start with alphabets and ends with digit
    var username = document.getElementById("username").value;
    alert(patt1.test(username)); // returns true or false
}

function check()
{
    var input = document.getElementById("input").value;
    var patt1 = /java/g; // check for matching string
    var patt2 = /^\w{4,10}$/g; // word with 4-10 characters
    var patt3 = /^(987)\d{7}$/g; //starts with 987
    var regexp;
    alert(patt3.test(input)); // check whether the input string contain the matching character

}
function emailcheck()
{
    var email = document.getElementById("email").value;
    var patt2 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    alert(patt2.test(email)); 


}
function showDate()
{
    var date = new Date();
    console.log(date);
    document.getElementById("date").value = date.getDate() + "-" + date.getMonth() 
                                           + "-" + date.getFullYear() ;
}
function zipcheck()
{
    var zip = document.getElementById("zip").value;
    var patt2 = /^\d{5}[-]\d{4}$/;
    
    alert(patt2.test(zip)); 

}
function search()
{
    var content = document.getElementById("content").value;
    
    var searchword = document.getElementById("search").value;
    var exp = new RegExp(searchword,'g'); // i - ignore case g -global
    //alert(content.match(searchword));
    //alert(content.match(exp));
    var words1 = content.match(exp);
    //alert(content.match(exp));
    //console.log(words1);
    alert("no of words " + words1.length);
    var newContent = content.replace(exp,"<span style='color:red'>" + searchword + "</span>");
    //console.log(newContent);
    console.log(document.getElementById('para1').innerHTML);
    document.getElementById('para1').innerHTML = newContent ;
    
    

}
