//triangle portion
document.getElementById('tri').addEventListener('click', function(){
    const tri1Field= document.getElementById('tri1');
    const tri1Value= tri1Field.value;

    const tri2Field= document.getElementById('tri2');
    const tri2Value= tri2Field.value;

    const t1val= parseFloat(tri1Value);
    const t2val= parseFloat(tri2Value);
    // console.log(t1val);
    // console.log(t2val);
    if(t1val<0 || t2val<0){
        alert('PLEASE ENTER POSITIVE NUMBERS IN BOTH FIELDS!!!!');
        tri1Field.value='';
        tri2Field.value='';
        return;
    }

    const ans= (.5*t1val*t2val).toFixed(2);
    tri1Field.value='';
    tri2Field.value='';
    if(ans==='NaN' || ans<0){
        alert('PLEASE ENTER POSITIVE NUMBERS BOTH FIELDS!!!');
        return;
    }

    // console.log(ans);
    common(ans,1);
    

});
