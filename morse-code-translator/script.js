document.addEventListener('DOMContentLoaded', () => {
    const toMorseCodeButton = document.getElementById('to');
    const fromMorseCodeButton = document.getElementById('from');
    const label = document.getElementById('label');
    const submitButton = document.getElementById('submit');
    const input = document.getElementById('input');


    toMorseCodeButton.classList.add('on');
    toMorse();

    function on(button, otherButton) {
        if (otherButton.classList.contains('on')) {
            otherButton.classList.remove('on');
        }
        button.classList.toggle('on');
    }

    function toMorse() {
        label.innerHTML = 'To Morse Code:';
    }

    function fromMorse(value) {
        label.innerHTML = 'From Morse Code:';
        let input = value
        
        const morseCode = {
            '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
            '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
            '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
            '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5',
            '-....': '6', '--...': '7', '---..': '8', '----.': '9',
            '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')',
            '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"',
            '...-..-': '$', '.--.-.': '@',' ':' ',
        };
        let word = ''
        const charList = input.split(' ')
        for (let char of charList) {
            console.log(charList)
            if(char ==' '){
                console.log('hi')
            }
        }

    }

    toMorseCodeButton.addEventListener('click', () => {
        on(toMorseCodeButton, fromMorseCodeButton);
        toMorse();
    });

    fromMorseCodeButton.addEventListener('click', () => {
        on(fromMorseCodeButton, toMorseCodeButton);
  });

    submitButton.addEventListener('click', ()=>{
        let value = input.value;
        fromMorse(value);

    })
});
