const s=prompt("Enter a name");
    let arr=s.split(' ');
    let result="";
    for(let i=0;i<arr.length;i++){
        result+=arr[i].charAt(0).toUpperCase();
        if(i<arr.length-1){
            result+=".";
        }
    }
    console.log(result);