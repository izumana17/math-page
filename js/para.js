function para(ans){
    const add=document.getElementById('divSec');
    const div=document.createElement('div');
    const p=document.createElement('span');

    const pt=document.createElement('span');
    pt.innerText='  Convert to m2';

    p.innerText='      parallelogram  '+ans;
    
    

    div.appendChild(p);
    div.appendChild(pt);

    divSec.appendChild(div);
    
}

document.getElementById('para').addEventListener('click', function(){
    const para1Field= document.getElementById('para1');
    const para1Value= para1Field.value;

    const para2Field= document.getElementById('para2');
    const para2Value= para2Field.value;

    const para1val= parseFloat(para1Value).toFixed(2);
    const para2val= parseFloat(para2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= para1val*para2val;
    para1Field.value='';
    para2Field.value='';
    // console.log(ans);
    para(ans);

});
