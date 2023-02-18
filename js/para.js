// function para(ans){
//     i++;
//     const add=document.getElementById('divSec');
//     const div=document.createElement('div');

//     const p=document.createElement('span');
//     p.innerText=i+'. Parallelogram  ';

//     const pt=document.createElement('span');
//     pt.innerText=' Convert to m2 ';

    
//     const pa=document.createElement('span');
//     pa.innerText=ans+' cm2';
//     pa.style.margin="20px 3px 20px 0px";




//     pt.style.backgroundColor='#1184e8';
//     pt.style.color='white';
//     pt.style.padding="8px";
//     pt.style.marginLeft="10px";
//     pt.style.border="2px solid white";
//     pt.style.borderRadius="5px";
    

//     const hr=document.createElement('hr');
     
//     div.appendChild(p);
//     div.appendChild(pa);
//     div.appendChild(pt);
//     divSec.appendChild(div);
//     divSec.appendChild(hr);
    
// }

document.getElementById('para').addEventListener('click', function(){
    const para1Field= document.getElementById('para1');
    const para1Value= para1Field.value;

    const para2Field= document.getElementById('para2');
    const para2Value= para2Field.value;

    const para1val= parseFloat(para1Value).toFixed(2);
    const para2val= parseFloat(para2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= (para1val*para2val).toFixed(2);
    para1Field.value='';
    para2Field.value='';
    if(ans==='NaN' || ans<0){
        alert('PLEASE ENTER POSITIVE NUMBERS BOTH FIELDS!!!!');
        return;
    }
    // console.log(ans);
    // para(ans);
    commonTwo(ans,2);

});
