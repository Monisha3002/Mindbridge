function remove() {
    const input=prompt("Enter a sentence");
    let result = ""; 

    for (let i = 0; i < input.length; i++) {
        if (result.indexOf(input[i]) === -1) {
            result += input[i];
        }
    }

    console.log(result);
}
remove();