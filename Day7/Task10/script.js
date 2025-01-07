let str='MONISHA';
let revstr='';
console.log("Original string: " + str);

for(let i=str.length-1;i>=0;i--){
    revstr+=str.charAt(i);
}
console.log("Reverse string: "+ revstr);