//Task for showing shopping cart

const amounT=document.getElementById('amt');
const expensE=document.getElementById('exp');
const btnVal=document.getElementById('tAmount');
const btn1=document.getElementById('btn1');
const mainSec=document.getElementsByTagName('main')[0];

btn1.addEventListener('click',function(){
    let amtVal=Number(amounT.value);
    let expVal=expensE.value;
    console.log(amtVal)

    let totalAmount=Number(btnVal.value)
    totalAmount=totalAmount+amtVal
    

    const newRow=`
    <div class="row flex gap-9">
      <p>${expVal}</p> 
      <p>${amtVal}</p>
    </div>
    `
    mainSec.innerHTML+=newRow;
})

