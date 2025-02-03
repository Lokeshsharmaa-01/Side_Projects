const inc = document.querySelector('#inc')
const dec = document.querySelector('#dec')
let acc = document.getElementById('acc')

const inp = document.getElementById('inp')


let cnt = 0;


const p = document.querySelector('p')

console.log(typeof(inp.value));


function increse(){
    const change = parseInt(inp.value)
    if(change > 0) {
        cnt += change
        p.innerText = cnt;
    }else{
        cnt++;
        p.innerText = cnt;
    }
    
}
function decrese(){
    cnt--;
    p.innerText = cnt;
}
const rst = document.querySelector('#rst')

rst.addEventListener('click',()=>{
    cnt = 0;
    p.innerText = cnt;

})