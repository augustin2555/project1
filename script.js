//Open Brewery API //

var h1=document.createElement("h1");
h1.innerHTML="Open Breweries Information";
document.body.append(h1);

 var div=document.createElement("div");
 document.body.append(div);

 
 function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var input=document.createElement(tagname);
    input.setAttribute(attrname,attrvalue);
    input.setAttribute(attrname1,attrvalue1);
    input.setAttribute(attrname2,attrvalue2);
    input.style.width="20cm";
    return input;
}

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.classList.add("btn","btn-success");
button.innerHTML="Search";

var input=createinput("input","class","form-control","placeholder","Type your Search here...","id","main");

div.append(input,button);
document.body.append(div);


async function foo(){

    try {

        var id=document.getElementById("main").value;
        console.log(id);

      var res=await fetch("https://api.openbrewerydb.org/breweries");
      var res1=await res.json();

      for( var i=0;i<res1.length;i++){

        console.log(res1[i].name);

        if(id=="name"){
            
           var ul=document.createElement("ul");
           var li=document.createElement("li");
           li.innerHTML=`Company Name: ${res1[i].name}`;
           ul.append(li);
           document.body.append(ul);
 
       }else if(id==`brewery type`){

          var ul=document.createElement("ul");
          var li=document.createElement("li");
          li.innerHTML=`Brewery Type: ${res1[i].brewery_type}`;
          ul.append(li);
          document.body.append(ul);
            
        }else if(id==`phone number`){

            var ul=document.createElement("ul");
            var li=document.createElement("li");
            li.innerHTML=`Phone Number: ${res1[i].phone}`;
            ul.append(li);
            document.body.append(ul);
              
          }else if(id==`address 2`){

            var ul=document.createElement("ul");
            var li=document.createElement("li");
            li.innerHTML=`Address 02: ${res1[i].address_2}`;
            ul.append(li);
            document.body.append(ul);
              
          }else if(id==`address 3`){

            var ul=document.createElement("ul");
            var li=document.createElement("li");
            li.innerHTML=`Addrress 03: ${res1[i].address_3}`;
            ul.append(li);
            document.body.append(ul);
              
          }else if(id==`website url`){

            var ul=document.createElement("ul");
            var li=document.createElement("li");
            li.innerHTML=`Website URL: ${res1[i].website_url}`;
            ul.append(li);
            document.body.append(ul);
              
          }else{

            var h4=document.createElement("h4");
            h4.innerHTML=`Invalid Input....!!!`;
            h4.style.color="red";
            document.body.append(h4);
            document.body.append(h4);
          }
        

      }
        
    } catch (error) {

        console.log("Errorr"+error);
        
    }
 }
  
 
  
    

    











