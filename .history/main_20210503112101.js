function numsToWords(n){
    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var result = [];
    while(n!=0){
        var digit = n % 10; 
        result.unshift(words[digit]);
        n = Math.floor(n/10);
    }
    return result.join('');
}
var args = process.argv.slice(2);
console.log(args);