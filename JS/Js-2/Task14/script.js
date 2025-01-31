let name1= "madam";
const myArray1 = name1.split("");
let new1="";
for(let i=myArray1.length-1;i>=0;i--){
    new1+=myArray1[i];
}
if(name1==new1){
    console.log("true");
}
else{
    console.log("false");
    
}