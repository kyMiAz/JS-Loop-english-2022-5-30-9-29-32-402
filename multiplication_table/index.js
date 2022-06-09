var result = '';
for(var i = 1; i<10; i++){
    for(var j = 1; j<=i; j++){
        result += j + '*' + i + '=' + i*j + " ";
        if(i === j) {
            result += '\n';
        }
    }
}
console.log( result );