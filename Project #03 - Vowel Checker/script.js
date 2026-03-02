function checkVowels() {

    let text = document.getElementById('inputText').value;
    let vowelCount = 0;

    // convert it into lowercase
    text = text.toLowerCase();

    for(let i = 0; i < text.length; i++){
        
        let char = text.charAt(i); // 0
        if(isVowel(char)){
            vowelCount++;
        }
    }

    let result = document.getElementById('result');
    result.textContent = 'Total Vowels: ' + vowelCount;

}

function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}