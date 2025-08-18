const findVowels = "programming";
function vowelCount(totalVowels) {
    let vowel = "aeiouAEIOU";
    let count = 0;
    for(let vowels of totalVowels){
        if(vowel.includes(vowels)){
            count++;
        }
    }
    return count;
}
console.log(vowelCount(findVowels));
