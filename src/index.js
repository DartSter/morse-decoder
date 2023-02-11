const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const phrase = [];
  expr.split("**********").forEach((word, index) => {
    const countOfletters = word.length / 10;
    const charArr = [];
    for (i = 0; i < countOfletters; i++) {
      charArr.push(word.slice(i * 10, i * 10 + 10));
    }
    charArr.forEach((ch, i) => {
      const letter = ch
        .replace(/10/g, ".")
        .replace(/11/g, "-")
        .replace(/00/g, "")
        .trim();
      charArr[i] = MORSE_TABLE[letter];
    });
    phrase[index] = charArr.join("");
  });
  return phrase.join(" ");
}

module.exports = {
    decode
}