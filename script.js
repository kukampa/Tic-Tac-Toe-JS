const main = document.querySelectorAll('.active-box');
const result = document.querySelector('.result');
const timer = document.querySelector('.timer');
const gameEnd = document.querySelector('.game-end');
start(main);

function start(main) {
    let i = 0;

    for(let cell of main) {
        cell.addEventListener('click', function() {
            if(this.textContent !== '') {
                setTimeout(function addRed() {
                    cell.classList.add('red');
                }, 100);
                setTimeout(function removeRed() {
                    cell.classList.remove('red');
                }, 800);
            } else {
                this.textContent = ['X', 'O'][i % 2];

                if(isVictory(main)) {
                    result.textContent = this.textContent;
                    gameEnd.classList.add('display-block');
                    setTimeout(() => {
                        location = location.href
                    }, 5000);
                } else if(i == 8) {
                    result.textContent = 'DRAW'
                }

                i++;
            }
        });
    }

    function isVictory(main) {
        let combs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for(let comb of combs){
            if(
                main[comb[0]].textContent == main[comb[1]].textContent &&
                main[comb[1]].textContent == main[comb[2]].textContent &&
                main[comb[0]].textContent != ''
            ){
                return true;
            } 
        }
        return false;
    }
}




