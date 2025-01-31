let num=prompt("Enter the number to find Prime");
let count=0;
if(num<=1){
    console.log(num + " is not a prime number")
}
else{
    for(let i=2;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==1 ){
        console.log(num + " is  a prime number");
    }
    else{
        console.log(num + " is not a prime number");
        
    }
}