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
const args = process.argv.slice(2);

args.forEach(item=>result.push(numsToWords(item)));

console.log("\""+result.join()+"\"");

