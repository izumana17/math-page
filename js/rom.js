//Rombus portion
document.getElementById('rhom').addEventListener('click', function(){
    const rhom1Field= document.getElementById('rhom1');
    const rhom1Value= rhom1Field.value;

    const rhom2Field= document.getElementById('rhom2');
    const rhom2Value= rhom2Field.value;

    const rhom1val= parseFloat(rhom1Value);
    const rhom2val= parseFloat(rhom2Value);
    // console.log(t1val);
    // console.log(t2val);
    if(rhom1val<0 || rhom2val<0){
        alert('PLEASE ENTER POSITIVE NUMBERS IN BOTH FIELDS!!!!');
        rhom1Field.value='';
        rhom2Field.value='';
        return;
    }

    const ans= (.5*rhom1val*rhom2val).toFixed(2);
    rhom1Field.value='';
    rhom2Field.value='';
    if(ans==='NaN' || ans<0){
        alert('PLEASE ENTER POSITIVE NUMBERS BOTH FIELDS!!!!');
        return;
    }
    // console.log(ans);
    // rhom(ans);
    common(ans,2);

});
