function rec(ans){
    const add=document.getElementById('divSec');
    const div=document.createElement('div');
    const p=document.createElement('span');

    const pt=document.createElement('span');
    pt.innerText='  Convert to m2';

    p.innerText='      Rectangle  '+ans;
    
    

    div.appendChild(p);
    div.appendChild(pt);

    divSec.appendChild(div);
    
}

document.getElementById('rec').addEventListener('click', function(){
    const rec1Field= document.getElementById('rec1');
    const rec1Value= rec1Field.value;

    const rec2Field= document.getElementById('rec2');
    const rec2Value= rec2Field.value;

    const r1val= parseFloat(rec1Value).toFixed(2);
    const r2val= parseFloat(rec2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= r1val*r2val;
    rec1Field.value='';
    rec2Field.value='';
    // console.log(ans);
    rec(ans);

});
