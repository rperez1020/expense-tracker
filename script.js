const incomeForm = document.querySelector('#income-form')
const expenseForm = document.querySelector('#expense-form')
const incomeInput = document.querySelector('#income-input')
const expenseName = document.querySelector('#input-expense-name')
const expenseInput = document.querySelector('#input-expenses')
const incomeDisplay = document.querySelector('[data-income-display')
const expenseList = document.querySelector('[data-expense-list]')
const expenseTotalDisplay = document.querySelector('[data-expense-total')
const remainingBalanceDisplay = document.querySelector('#remaining-balance-display')

let expenseTotal = 0
let incomeTotal = 0
let remainingBalance = 0

incomeForm.addEventListener('submit', e => {
    e.preventDefault()
    if(incomeInput.value == ''){
        incomeDisplay.innerText = 'Income: $0.00'
    }else{
        incomeDisplay.innerText = 'Income: $'+incomeInput.value
        incomeTotal = parseInt(incomeInput.value)
        remainingBalance = incomeTotal - expenseTotal
        remainingBalanceDisplay.innerText = 'Remaining Balance: $' + remainingBalance
        incomeInput.value = ''
    }
})


expenseForm.addEventListener('submit', e => {
    e.preventDefault()

    const expenseItem = document.createElement('div')
    expenseItem.innerText=expenseName.value + " " + expenseInput.value
    expenseItem.classList.add('expense')
    expenseList.append(expenseItem)
    
    if(expenseInput.value != ''){
        expenseTotal += parseInt(expenseInput.value)
        expenseTotalDisplay.innerText = 'Total Expenses: $' + expenseTotal
        console.log(expenseTotal)
    }
    expenseInput.value = ''
    expenseName.value = ''
    

    expenseItem.addEventListener("click", ()=>{
        
        expenseTotal -= parseInt(expenseItem.value)
        remainingBalance = incomeTotal-expenseTotal
        console.log(expenseTotal)

        remainingBalanceDisplay.innerText = 'Remaining Balance: $' + remainingBalance
        expenseTotalDisplay.innerText = 'Total Expenses: $' + expenseTotal
        expenseItem.remove()
    })
})

