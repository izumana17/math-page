// Parallelogram portion
document.getElementById('para').addEventListener('click', function(){
    const para1Field= document.getElementById('para1');
    const para1Value= para1Field.value;

    const para2Field= document.getElementById('para2');
    const para2Value= para2Field.value;

    const para1val= parseFloat(para1Value);
    const para2val= parseFloat(para2Value);
    // console.log(t1val);
    // console.log(t2val);
    if(para1val<0 || para2val<0){
        alert('PLEASE ENTER POSITIVE NUMBERS IN BOTH FIELDS!!!!');
        para1Field.value='';
        para2Field.value='';
        return;
    }

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
