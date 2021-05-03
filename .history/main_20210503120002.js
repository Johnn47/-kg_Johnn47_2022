function numsToWords(n){
    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var result = [];
    var nArray = n.split("");
    
    if (n==0) return 'zero'; // corner case
    nArray.forEach(function(item, i) { nArray[i] = words[parseInt(item)] });
   
    return nArray.join('');
}
const args = process.argv.slice(2);
var result = [];
args.forEach(item=>result.push(numsToWords(item)));

console.log("\""+result.join()+"\"");

