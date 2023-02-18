//common function for rhombus and triangle
function common(ans, id){
    i++;
    const add=document.getElementById('divSec');
    const div=document.createElement('div');

    const p=document.createElement('span');
    if(id===1)
    {
        p.innerText=i+'.      Triangle  ';
    }
    else
    {
        p.innerText=i+'. Rhombus  ';
    }

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