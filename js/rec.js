// function rec(ans){
//     i++;
//     const add=document.getElementById('divSec');
//     const div=document.createElement('div');

//     const p=document.createElement('span');
//     p.innerText=i+'. Rectangle  ';

//     const pt=document.createElement('span');
//     pt.innerText=' Convert to m2 ';

    
//     const pa=document.createElement('span');
//     pa.innerText=ans+' cm2';
//     pa.style.margin="20px 10px 20px 10px";




//     pt.style.backgroundColor='#1184e8';
//     pt.style.color='white';
//     pt.style.padding="8px";
//     pt.style.marginLeft="50px";
//     pt.style.border="2px solid white";
//     pt.style.borderRadius="5px";
    

//     const hr=document.createElement('hr');
     
//     div.appendChild(p);
//     div.appendChild(pa);
//     div.appendChild(pt);
//     divSec.appendChild(div);
//     divSec.appendChild(hr);
    
// }

document.getElementById('rec').addEventListener('click', function(){
    const rec1Field= document.getElementById('rec1');
    const rec1Value= rec1Field.value;

    const rec2Field= document.getElementById('rec2');
    const rec2Value= rec2Field.value;

    const r1val= parseFloat(rec1Value).toFixed(2);
    const r2val= parseFloat(rec2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= (r1val*r2val).toFixed(2);
    rec1Field.value='';
    rec2Field.value='';
    if(ans==='NaN' || ans<0){
        alert('PLEASE ENTER POSITIVE NUMBERS BOTH FIELDS!!!!');
        return;
    }
    // console.log(ans);
    // rec(ans);
    commonTwo(ans,1);

});
