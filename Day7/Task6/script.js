let array=[1,5,3,9,2];
let max=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log(max);