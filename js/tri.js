

function tri(ans){
    const add=document.getElementById('divSec');
    const div=document.createElement('div');

    const p=document.createElement('span');
    p.innerText='      Triangle  ';

    const pt=document.createElement('span');
    pt.innerText=' Convert to m2 ';

    
    const pa=document.createElement('span');
    pa.innerText=ans+' cm2';
    pa.style.margin="20px 20px 20px 20px";




    pt.style.backgroundColor='#1184e8';
    pt.style.color='white';
    pt.style.padding="8px";
    pt.style.marginLeft="100px";
    pt.style.border="2px solid white";
    pt.style.borderRadius="5px";
    

     const hr=document.createElement('hr');
     
    div.appendChild(p);
    div.appendChild(pa);
    div.appendChild(pt);
    divSec.appendChild(div);
    divSec.appendChild(hr);
    
}

document.getElementById('tri').addEventListener('click', function(){
    const tri1Field= document.getElementById('tri1');
    const tri1Value= tri1Field.value;

    const tri2Field= document.getElementById('tri2');
    const tri2Value= tri2Field.value;

    const t1val= parseFloat(tri1Value).toFixed(2);
    const t2val= parseFloat(tri2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= (.5*t1val*t2val).toFixed(2);
    tri1Field.value='';
    tri2Field.value='';
    if(ans==='NaN' || ans<0){
        alert('PLEASE ENTER POSITIVE NUMBERS BOTH FIELDS!!!');
        return;
    }

    // console.log(ans);
    tri(ans);
    

});
