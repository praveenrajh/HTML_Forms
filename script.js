

form.addEventListener("submit",function(event) { 
    event.preventDefault();
 var tablerow=document.createElement("tr");//table row creation
 var tabletag=document.querySelector("table");
   
     var tablecontent1=document.createElement("td");
     var tablecontent2=document.createElement("td");
     var tablecontent3=document.createElement("td");
     var tablecontent4=document.createElement("td");
     var tablecontent5=document.createElement("td");
     var tablecontent6=document.createElement("td");
     var tablecontent7=document.createElement("td");
     var tablecontent8=document.createElement("td");
 
     var docu1=document.querySelector("#vehicle1")
     var docu2=document.querySelector("#vehicle2")
     var docu3=document.querySelector("#vehicle3")
     var docu4=document.querySelector("#vehicle4")
     var docu5=document.querySelector("#vehicle5 ")
     var docu6=document.querySelector("#vehicle6");
 var count=0;
   if(docu1.checked){
     
     count++;
     
     
   }
 if(docu2.checked){
      count++;
     
   }
 if(docu3.checked){
 
     count++;
     
   }
 if(docu4.checked){
     count++;
 }
 if(docu5.checked){
     count++;
     
 }
 if(docu6.checked){
     count++;
     
 }
 
 
 
 
   var e=document.querySelector("#firstname").value;
     var a=document.querySelector("#lastname").value;
     var b=document.querySelector("#address").value;
     var c=document.querySelector("#pincode").value;
     var d=document.querySelector("#country").value;
 
 var male=document.querySelector(".m");
 var female=document.querySelector(".f");
 var others=document.querySelector(".o");
    if(male.checked){
     tablecontent7.innerHTML=male.value;
        }
        if(female.checked){
         tablecontent7.innerHTML=female.value;
        }
        if(others.checked){
         tablecontent7.innerHTML=others.value;
        }
 
     
     var m=document.querySelector("#state").value;
 tablecontent1.innerHTML=e;
 tablecontent2.innerHTML=a;
 tablecontent3.innerHTML=b;
 tablecontent4.innerHTML=m;
 tablecontent5.innerHTML=d;
 tablecontent6.innerHTML=c;
 
 
 let arr=[];
 if(count>=2){
     console.log(count);
     if(docu1.checked){
     
     arr.push(docu1.value);
      
             
       }
     if(docu2.checked){
         
       arr.push(docu2.value);
       }
     if(docu3.checked){
     
       arr.push(docu3.value);
         
       }
     if(docu4.checked){  
       arr.push(docu4.value);
     }
     if(docu5.checked){
       arr.push(docu5.value);
         
     }
     if(docu6.checked){
       arr.push(docu6.value);
         
     }
    tablecontent8.innerHTML=arr.join(",");
 }
 
 else{
   window.alert("Please enter atleast two favourite foods");
   
 }
 
 console.log(tablecontent1.innerHTML);
     tablerow.append(tablecontent1,tablecontent2,tablecontent3,tablecontent4,tablecontent5,tablecontent6,tablecontent7,tablecontent8);
     tabletag.append(tablerow);
 });