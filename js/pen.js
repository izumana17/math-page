

function pen(ans){
    const add=document.getElementById('divSec');
    const div=document.createElement('div');
    const p=document.createElement('span');

    const pt=document.createElement('span');
    pt.innerText='  Convert to m2';

    p.innerText='      Pentagon  '+ans;
    

    div.appendChild(p);
    div.appendChild(pt);
    divSec.appendChild(div);
    
}

document.getElementById('pen').addEventListener('click', function(){
    const pen1Field= document.getElementById('pen1');
    const pen1Value= pen1Field.value;

    const pen2Field= document.getElementById('pen2');
    const pen2Value= pen2Field.value;

    const pen1val= parseFloat(pen1Value).toFixed(2);
    const pen2val= parseFloat(pen2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= .5*pen1val*pen2val;
    pen1Field.value='';
    pen2Field.value='';
    // console.log(ans);
    pen(ans);

});
