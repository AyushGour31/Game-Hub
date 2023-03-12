const bcc = document.querySelector('.getName');
const nam = document.querySelector('.nm');
const bt = document.querySelector('.nbtn');
let cnam;

bt.addEventListener('click', function(e){
    const n = nam.value;
    const n2 = n.charAt(0).toUpperCase() + n.slice(1);
    
    localStorage.setItem('p-nam', n2);
    document.querySelector('.pNam-s').textContent = localStorage.getItem('p-nam');
    cnam = localStorage.getItem('p-nam')
    bcc.style.left = '-100vw';
    
    e.preventDefault();
});
