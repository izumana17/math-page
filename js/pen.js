//Pentagon portion
function pen(ans){
    i++;
    const add=document.getElementById('divSec');
    const div=document.createElement('div');

    const p=document.createElement('span');
    p.innerText=i+'. Pentagon  ';

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

document.getElementById('pen').addEventListener('click', function(){
    const pen1Field= document.getElementById('pen1');
    const pen1Value= pen1Field.value;

    const pen2Field= document.getElementById('pen2');
    const pen2Value= pen2Field.value;

    const pen1val= parseFloat(pen1Value).toFixed(2);
    const pen2val= parseFloat(pen2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= (.5*pen1val*pen2val).toFixed(2);
    pen1Field.value='';
    pen2Field.value='';
    if(ans==='NaN' || ans<0){
        alert('PLEASE ENTER POSITIVE NUMBERS BOTH FIELDS!!!!');
        return;
    }
    // console.log(ans);
    pen(ans);

});
