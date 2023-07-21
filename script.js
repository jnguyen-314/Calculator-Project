function calculatorLayout() {
    let mainTag = document.createElement('main');
    let calcKeys = ['MRC', 'M-', 'M+','C','CE',
                    '7','8','9','%','&radic;',
                    '4','5','6','*','/',
                    '1','2','3','+','-',
                    '0','.','+/-','='];

    mainTag.innerHTML = `<div id="display">0</div>`;

    for(let i = 0;i<calcKeys.length;i++) {
        mainTag.innerHTML += `<button class="keys">${calcKeys[i]}</button>`
    }

    document.querySelector('body').append(mainTag);
}

calculatorLayout();

//Calculator Key Action
document.querySelectorAll('button').forEach(key => {
    key.addEventListener('click', function() {
        switch (this.innerText) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            {
                if (document.querySelector('div#display').innerHTML === '0'){
                    document.querySelector('div#display').innerHTML = '';
                }
                document.querySelector('div#display').innerHTML += `${this.innerText}`;
                break;
            }
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
            {
                document.querySelector('div#display').innerHTML += this.innerText;
                break
            }
            case '=': {
                document.querySelector('div#display').innerHTML =
                    math.evaluate(document.querySelector('div#display').innerHTML);
                break
            }
            case 'C': {
                document.querySelector('div#display').innerHTML = '0';
                break
            }
            default:
                alert('Calculator Broke');

        }
    })
})