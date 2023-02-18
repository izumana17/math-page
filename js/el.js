

function el(ans){
    const add=document.getElementById('divSec');
    const div=document.createElement('div');
    const p=document.createElement('span');

    const pt=document.createElement('span');
    pt.innerText='  Convert to m2';

    p.innerText='      Ellipse  '+ans;
    

    div.appendChild(p);
    div.appendChild(pt);
    divSec.appendChild(div);
    
}

document.getElementById('el').addEventListener('click', function(){
    const el1Field= document.getElementById('el1');
    const el1Value= el1Field.value;

    const el2Field= document.getElementById('el2');
    const el2Value= el2Field.value;

    const el1val= parseFloat(el1Value).toFixed(2);
    const el2val= parseFloat(el2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= 3.1416*el1val*el2val;
    el1Field.value='';
    el2Field.value='';
    // console.log(ans);
    el(ans);

});
