// takes in a number n and returns the phonetic representation of n.
function numsToWords(n){
    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var nArray = n.split("");  // convert input to array
    // loops through the array to change elements from int form to words form.
    nArray.forEach(function(item, i) { nArray[i] = words[parseInt(item)] }); 
    return nArray.join('');
}
const args = process.argv.slice(2); //takes in command line arguments, start from position 2.
var result = [];
args.forEach(item=>result.push(numsToWords(item)));

console.log("\""+result.join()+"\"");

