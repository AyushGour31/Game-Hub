const movesLeft = document.querySelector('.moveLeft');
const playerScore = document.querySelector('.p-count');
const computerScore = document.querySelector('.c-count');
const plmo = document.querySelector('.pm');
const clmo = document.querySelector('.cm');
const plw = document.querySelector('.pw');
const cpw = document.querySelector('.cw');
const r = document.querySelector('.reset');
const result = document.querySelector('.result');
const mresult = document.querySelector('.final-result');
const mps = document.querySelector('.ps');
const mr = document.querySelector('.r');
const mcs = document.querySelector('.cs');
const pn = document.querySelector('.pn');
const pms = document.querySelector('.pms');
const cn = document.querySelector('.cn');
const cms = document.querySelector('.cms');
const fr = document.querySelector('.em');
const er = document.querySelector('.final-result');

let pc, cc;
let t = 9;
let ps = 1;
let cs = 1;
let choice = ["Rock", "Paper", "Scissor"];

// const bcc = document.querySelector('.getName');
// const nam = document.querySelector('.nm');
// const bt = document.querySelector('.nbtn');
// let cnam;

// bt.addEventListener('click', function(e){
//     const n = nam.value;
//     const n2 = n.charAt(0).toUpperCase() + n.slice(1);
    
//     localStorage.setItem('p-nam', n2);
//     document.querySelector('.pNam-s').textContent = localStorage.getItem('p-nam');
//     document.querySelector('.pNam-m').textContent = localStorage.getItem('p-nam');
//     document.querySelector('.pNam-sf').textContent = localStorage.getItem('p-nam');
//     cnam = localStorage.getItem('p-nam')
//     bcc.style.left = '-100vw';
    
//     e.preventDefault();
// })



const rpsC = document.querySelectorAll('.rps');

rpsC.forEach(rps => {
    rps.onclick = () => RPSgame(rps.value)
});

r.addEventListener('click',() => {
    window.location.reload();
})


function RPSgame(pc){
    let randomNum = Math.floor(Math.random()*3);
    cc = choice[randomNum];

    movesLeft.innerText = t;
    t--;
    
// Tie
    if(pc == "Rock" && cc == "Rock"){
        plmo.innerText = '✊';
        clmo.innerText = '✊';
        plw.innerText = '';
        cpw.innerText = '';
    }
    else if(pc == "Paper" && cc == "Paper"){
        plmo.innerText = '✋';
        clmo.innerText = '✋';
        plw.innerText = '';
        cpw.innerText = '';
    }
    else if(pc == "Scissor" && cc == "Scissor"){
        plmo.innerText = '✌️';
        clmo.innerText = '✌️';
        plw.innerText = '';
        cpw.innerText = '';
    }
    
// you won
    else if(pc == "Rock" && cc == "Scissor"){
        plmo.innerText = '✊';
        clmo.innerText = '✌️';
        plw.innerText = '✔️';
        cpw.innerText = '❌';
        playerScore.innerText = ps;
        ps++;
    }
    else if(pc == "Paper" && cc == "Rock"){
        plmo.innerText = '✋';
        clmo.innerText = '✊';
        plw.innerText = '✔️';
        cpw.innerText = '❌';
        playerScore.innerText = ps;
        ps++;
    }
    else if(pc == "Scissor" && cc == "Paper"){
        plmo.innerText = '✌️';
        clmo.innerText = '✋';
        plw.innerText = '✔️';
        cpw.innerText = '❌';
        playerScore.innerText = ps;
        ps++;
    }
    
// Computer won 
    else if(pc == "Rock" && cc == "Paper"){
        plmo.innerText = '✊';
        clmo.innerText = '✋';
        plw.innerText = '❌';
        cpw.innerText = '✔️';
        computerScore.innerText = cs;
        cs++;
    }
    else if(pc == "Paper" && cc == "Scissor"){
        plmo.innerText = '✋';
        clmo.innerText = '✌️';
        plw.innerText = '❌';
        cpw.innerText = '✔️';
        computerScore.innerText = cs;
        cs++;
    }
    else if(pc == "Scissor" && cc == "Rock"){
        plmo.innerText = '✌️';
        clmo.innerText = '✊';
        plw.innerText = '❌';
        cpw.innerText = '✔️';
        computerScore.innerText = cs;
        cs++;
    }

    if(movesLeft.innerText == 0){
        fr.style.left = "0";
        er.style.left = "calc(50vw - 200px)";
        
        pms.innerText = ps-1;
        
        if(ps == cs){
            fr.innerText = 'It\'s a tie, \nPlease Try again';
            mr.style.color = '#e65300';
            mr.innerText = 'Tie';
            console.log("End Match")
        }
        else if(ps > cs){
            fr.innerText = `Congratulations, \nYou Won!` ;
            mr.style.color = '#00e800';
            mr.innerText = 'Victory';
            console.log("End Match")
        }
        else{
            fr.innerText = 'You Lose! \nBetter luck next time';
            mr.style.color = "#e50f00";
            mr.innerText = 'Defeat';
            console.log("End Match")
        }

        cn.innerText = "Computer's Score";
        cms.innerText = cs-1;
    }
}
