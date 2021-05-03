function numsToWords(n){
    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var result = [];
    while(n!=0){
        var digit = n % 10; 
        result += words[digit];
        n = Math.floor(n/10);
    }
    console.log(result);
}
numsToWords(100);