function numsToWords(n){
    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var result = [];
    
    if (n==0) return 'zero'; // corner case
    console.log(typeof n);
    console.log(n+"\n");
    
    while(n!=0){
        console.log(typeof n);
        var digit = n % 10; 
        result.unshift(words[digit]);
        n = Math.floor(n/10);
    }
    return result.join('');
}
const args = process.argv.slice(2);
var result = [];
args.forEach(item=>result.push(numsToWords(item)));

console.log("\""+result.join()+"\"");

