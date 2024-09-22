 
 const calculateButton =document.getElementById("calculate");

calculateButton.addEventListener("click", function(){
    const incomeEl =parseFloat(document.getElementById("income").value);
    const softwareEl =parseFloat(document.getElementById("software").value);
    const coursesEl =parseFloat(document.getElementById("courses").value);
    const internetEl =parseFloat(document.getElementById("internet").value);
    
    const totalCostBlnc =softwareEl+coursesEl+internetEl;
    const allResults =incomeEl - totalCostBlnc;
    console.table(totalCostBlnc, allResults);

    const totalExpensesEl =document.getElementById('total-expenses');
    const balanceEl =document.getElementById('balance');
    
    if(incomeEl < 30000 && incomeEl > totalCostBlnc){
        totalExpensesEl.innerText = totalCostBlnc.toFixed(2);
        balanceEl.innerText = allResults.toFixed(2);
         return incomeEl;
        
    }
    else{
        return alert('faild')
    }
    
   
 });


 const calculateSavingsEl =document.getElementById('calculate-savings');
 calculateSavingsEl.addEventListener('click', function(){
    const savingsEl =parseFloat(document.getElementById('savings').value);
    const incomeEl =parseFloat(document.getElementById("income").value);
    const softwareEl =parseFloat(document.getElementById("software").value);
    const coursesEl =parseFloat(document.getElementById("courses").value);
    const internetEl =parseFloat(document.getElementById("internet").value);
    
    const totalCostBlnc =softwareEl+coursesEl+internetEl;
    const allResults =incomeEl - totalCostBlnc;
    const savingsAmmount = (savingsEl * allResults) / 100;
    const savingsAmountEl =document.getElementById('savings-amount');
    savingsAmountEl.innerText = savingsAmmount.toFixed(2);
 })
 