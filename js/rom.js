function rhom(ans){
    const add=document.getElementById('divSec');
    const div=document.createElement('div');

    const p=document.createElement('span');
    p.innerText='Rhombus  ';

    const pt=document.createElement('span');
    pt.innerText=' Convert to m2 ';

    
    const pa=document.createElement('span');
    pa.innerText=ans+' cm2';
    pa.style.margin="5px 20px 5px 50px"




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

document.getElementById('rhom').addEventListener('click', function(){
    const rhom1Field= document.getElementById('rhom1');
    const rhom1Value= rhom1Field.value;

    const rhom2Field= document.getElementById('rhom2');
    const rhom2Value= rhom2Field.value;

    const rhom1val= parseFloat(rhom1Value).toFixed(2);
    const rhom2val= parseFloat(rhom2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= .5*rhom1val*rhom2val;
    rhom1Field.value='';
    rhom2Field.value='';
    // console.log(ans);
    rhom(ans);

});
