
function el(ans){
    i++;
    const add=document.getElementById('divSec');
    const div=document.createElement('div');

    const p=document.createElement('span');
    p.innerText=i+'. Ellipse  ';

    const pt=document.createElement('span');
    pt.innerText=' Convert to m2 ';

    
    const pa=document.createElement('span');
    pa.innerText=ans+' cm2';
    pa.style.margin="20px 20px 20px 20px";




    pt.style.backgroundColor='#1184e8';
    pt.style.color='white';
    pt.style.padding="8px";
    pt.style.marginLeft="50px";
    pt.style.border="2px solid white";
    pt.style.borderRadius="5px";
    

    const hr=document.createElement('hr');
     
    div.appendChild(p);
    div.appendChild(pa);
    div.appendChild(pt);
    divSec.appendChild(div);
    divSec.appendChild(hr);
    
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

    const ans= (3.1416*el1val*el2val).toFixed(2);
    el1Field.value='';
    el2Field.value='';
    if(ans==='NaN' || ans<0){
        alert('PLEASE ENTER POSITIVE NUMBERS IN BOTH FIELDS!!!!');
        return;
    }
    // console.log(ans);
    el(ans);

});
