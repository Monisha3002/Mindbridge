function replaceeven(){
    const words=prompt("Enter a sentence");
    arr=words.split(' ');
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            arr[i]='EVEN';
        }
    }
    console.log(arr.join(' '));
}
replaceeven();