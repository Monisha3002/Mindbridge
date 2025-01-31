function findLargestWord() {
    const str=prompt("Enter a sentence");
    let arr=str.split(" ");
    let result=arr[0];
    for(let i=1;i<arr.length;i++){
        if(result.length<arr[i].length){
            result=arr[i];
        }
    }
    console.log(result);
}
findLargestWord();