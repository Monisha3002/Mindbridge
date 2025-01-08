function replace(){
    const str=prompt("Enter a sentence");
    arr=str.split(' ');
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) != i){
            arr[i]='CHANGED';
        }
    }
    console.log(arr.join(' '));
}
replace();