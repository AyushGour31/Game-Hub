const v1 = document.querySelector('.a1');
const v2 = document.querySelector('.a2');
const v3 = document.querySelector('.a3');
const v4 = document.querySelector('.a4');
const v5 = document.querySelector('.a5');
const v6 = document.querySelector('.a6');
const v7 = document.querySelector('.a7');
const v8 = document.querySelector('.a8');
const v9 = document.querySelector('.a9');
const choice = [v1, v2, v3, v4, v5, v6, v7, v8, v9];
let randomNum;

const fr = document.querySelector('.em')
const er = document.querySelector('.final-result')
const fa = document.querySelector('.fa')
const la = document.querySelector('.la')

// print value by player
const rpsC = document.querySelectorAll('.a');
rpsC.forEach(a => {
    let i=9;
    a.onclick = () => {
        if(a.innerHTML == 'O'){return;}
        else{
            while(i--){
                if(a.innerHTML == ''){
                    a.innerHTML = 'O';
                    break;
                }
            }
        }
        i=9;
        if(a.innerHTML == 'X'){return;}
        else{
            result();
            while(i--){
                randomNum = logic();
                randomNum = Math.floor(Math.random()*9);
                if(choice[randomNum].innerHTML == ''){
                    choice[randomNum].innerHTML = 'X'
                    break;
                }
            }    
        }
    }
});

function result(){
    if((v1.innerHTML == 'O' && v2.innerHTML == 'O' && v3.innerHTML == 'O') ||
    (v4.innerHTML == 'O' && v5.innerHTML == 'O' && v6.innerHTML == 'O') ||
    (v7.innerHTML == 'O' && v8.innerHTML == 'O' && v9.innerHTML == 'O') ||
    (v1.innerHTML == 'O' && v4.innerHTML == 'O' && v7.innerHTML == 'O') ||
    (v2.innerHTML == 'O' && v5.innerHTML == 'O' && v8.innerHTML == 'O') ||
    (v3.innerHTML == 'O' && v6.innerHTML == 'O' && v9.innerHTML == 'O') ||
    (v1.innerHTML == 'O' && v5.innerHTML == 'O' && v9.innerHTML == 'O') ||
    (v3.innerHTML == 'O' && v5.innerHTML == 'O' && v7.innerHTML == 'O')){
        fr.style.left = "0";
        er.style.left = "calc(50vw - 190px)";
        fa.innerHTML = 'Congratulations,';
        la.innerHTML = 'You Won!';
    }
    else if((v1.innerHTML == 'X' && v2.innerHTML == 'X' && v3.innerHTML == 'X') ||
    (v4.innerHTML == 'X' && v5.innerHTML == 'X' && v6.innerHTML == 'X') ||
    (v7.innerHTML == 'X' && v8.innerHTML == 'X' && v9.innerHTML == 'X') ||
    (v1.innerHTML == 'X' && v4.innerHTML == 'X' && v7.innerHTML == 'X') ||
    (v2.innerHTML == 'X' && v5.innerHTML == 'X' && v8.innerHTML == 'X') ||
    (v3.innerHTML == 'X' && v6.innerHTML == 'X' && v9.innerHTML == 'X') ||
    (v1.innerHTML == 'X' && v5.innerHTML == 'X' && v9.innerHTML == 'X') || 
    (v3.innerHTML == 'X' && v5.innerHTML == 'X' && v7.innerHTML == 'X')){
        fr.style.left = "0";
        er.style.left = "calc(50vw - 190px)";
        fa.innerHTML = 'You Lose!';
        la.innerHTML = 'Better luck next time';
    }
    let k=0;
    for(let i=0;i<9;i++){
        if(choice[i].innerHTML != ''){
            k++;
            if((i == 8) && (k == 8)){
                fr.style.left = "0";
                er.style.left = "calc(50vw - 190px)";
                fa.innerHTML = 'It\'s a tie,';
                la.innerHTML = 'Please Try again';
            }
        }
    }
}
    
    // 1 2 3
    // 4 5 6
    // 7 8 9

function logic(){
// random
    // if(v1.innerHTML == 'O' || v2.innerHTML == 'O' || v3.innerHTML == 'O' || 
    // v4.innerHTML == 'O' || v5.innerHTML == 'O' || v6.innerHTML == 'O' || 
    // v7.innerHTML == 'O' || v8.innerHTML == 'O' || v9.innerHTML == 'O'){
    //     randomNum = Math.floor(Math.random()*9);
    // }
// 1 -> 'O'
    if(v1.innerHTML == 'O' && v2.innerHTML == 'O' && v3.innerHTML == ''){
        randomNum = 2;
        return randomNum;
    }
    if(v1.innerHTML == 'O' && v3.innerHTML == 'O' && v2.innerHTML == ''){
        randomNum = 1;
        return randomNum;
    }
    if(v1.innerHTML == 'O' && v4.innerHTML == 'O' && v7.innerHTML == ''){
        randomNum = 6;
        return randomNum;
    }
    if(v1.innerHTML == 'O' && v7.innerHTML == 'O' && v4.innerHTML == ''){
        randomNum = 3;
        return randomNum;
    }
    if(v1.innerHTML == 'O' && v5.innerHTML == 'O' && v9.innerHTML == ''){
        randomNum = 8;
        return randomNum;
    }
    if(v1.innerHTML == 'O' && v9.innerHTML == 'O' && v5.innerHTML == ''){
        randomNum = 4;
        return randomNum;
    }
// 2 -> 'O'
    if(v2.innerHTML == 'O' && v5.innerHTML == 'O' && v8.innerHTML == ''){
        randomNum = 7;
        return randomNum;
    }
    if(v2.innerHTML == 'O' && v8.innerHTML == 'O' && v5.innerHTML == ''){
        randomNum = 4;
        return randomNum;
    }
// 3 -> 'O'
    if(v3.innerHTML == 'O' && v2.innerHTML == 'O' && v1.innerHTML == ''){
        randomNum = 0;
        return randomNum;
    }
    if(v3.innerHTML == 'O' && v6.innerHTML == 'O' && v9.innerHTML == ''){
        randomNum = 8;
        return randomNum;
    }
    if(v3.innerHTML == 'O' && v9.innerHTML == 'O' && v6.innerHTML == ''){
        randomNum = 5;
        return randomNum;
    }
    if(v3.innerHTML == 'O' && v5.innerHTML == 'O' && v7.innerHTML == ''){
        randomNum = 6;
        return randomNum;
    }
    if(v3.innerHTML == 'O' && v7.innerHTML == 'O' && v5.innerHTML == ''){
        randomNum = 4;
        return randomNum;
    }
// 4 -> 'O'
    if(v4.innerHTML == 'O' && v5.innerHTML == 'O' && v6.innerHTML == ''){
        randomNum = 5;
        return randomNum;
    }
    if(v4.innerHTML == 'O' && v6.innerHTML == 'O' && v5.innerHTML == ''){
        randomNum = 4;
        return randomNum;
    }
// 5 -> 'O'
    if(v5.innerHTML == 'O' && v6.innerHTML == 'O' && v4.innerHTML == ''){
        randomNum = 3;
        return randomNum;
    }
    if(v5.innerHTML == 'O' && v7.innerHTML == 'O' && v3.innerHTML == ''){
        randomNum = 2;
        return randomNum;
    }
    if(v5.innerHTML == 'O' && v8.innerHTML == 'O' && v2.innerHTML == ''){
        randomNum = 1;
        return randomNum;
    }
    if(v5.innerHTML == 'O' && v9.innerHTML == 'O' && v1.innerHTML == ''){
        randomNum = 0;
        return randomNum;
    }
// 6 -> 'O'
// 7 -> 'O'
    if(v7.innerHTML == 'O' && v4.innerHTML == 'O' && v1.innerHTML == ''){
        randomNum = 0;
        return randomNum;
    }
    if(v7.innerHTML == 'O' && v8.innerHTML == 'O' && v9.innerHTML == ''){
        randomNum = 8;
        return randomNum;
    }
    if(v7.innerHTML == 'O' && v9.innerHTML == 'O' && v8.innerHTML == ''){
        randomNum = 7;
        return randomNum;
    }
// 8 -> 'O'
// 9 -> 'O'
    if(v9.innerHTML == 'O' && v6.innerHTML == 'O' && v3.innerHTML == ''){
        randomNum = 2;
        return randomNum;
    }
    if(v9.innerHTML == 'O' && v8.innerHTML == 'O' && v7.innerHTML == ''){
        randomNum = 6;
        return randomNum;
    }
}

// reset
const r = document.querySelector('.reset')
r.addEventListener('click',() => {
    window.location.reload();
})

