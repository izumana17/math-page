//rectangle portion
document.getElementById('rec').addEventListener('click', function(){
    const rec1Field= document.getElementById('rec1');
    const rec1Value= rec1Field.value;

    const rec2Field= document.getElementById('rec2');
    const rec2Value= rec2Field.value;

    const r1val= parseFloat(rec1Value);
    const r2val= parseFloat(rec2Value);
    // console.log(t1val);
    // console.log(t2val);
    if(r1val<0 || r2val<0){
        alert('PLEASE ENTER POSITIVE NUMBERS IN BOTH FIELDS!!!!');
        rec1Field.value='';
        rec2Field.value='';
        return;
    }

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
