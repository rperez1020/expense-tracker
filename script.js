const incomeForm = document.querySelector('#income-form')
const expenseForm = document.querySelector('#expense-form')
const incomeInput = document.querySelector('#income-input')
const expenseName = document.querySelector('#input-expense-name')
const expenseInput = document.querySelector('#input-expenses')
const incomeDisplay = document.querySelector('[data-income-display')
const expenseList = document.querySelector('[data-expense-list]')
const expenseTotalDisplay = document.querySelector('[data-expense-total')
const remainingBalanceDisplay = document.querySelector('[data-remaining-balance-display]')


let expenseTotal = 0
let incomeTotal = 0
let remainingBalance = 0

updateDisplay()

incomeForm.addEventListener('submit', e => {
    e.preventDefault()

    incomeTotal = parseInt(incomeInput.value)
    updateDisplay()
    incomeInput.value = ''
})


expenseForm.addEventListener('submit', e => {
    e.preventDefault()

    const expenseItem = document.createElement('div')
    expenseItem.classList.add('expenseItem')
    expenseItem.innerText=`${expenseName.value}: $${expenseInput.value}`
    expenseItem.expense = parseInt(expenseInput.value)
    expenseList.append(expenseItem)
    
    expenseTotal += expenseItem.expense
    updateDisplay()
    
    expenseInput.value = ''
    expenseName.value = ''
    
    expenseItem.addEventListener("click", ()=>{
        expenseTotal -= expenseItem.expense
        updateDisplay()
        expenseItem.remove()
    })
    
})

function updateDisplay(){
    if(expenseTotal < 0 ){
        expenseTotal = 0
    }
    remainingBalance = incomeTotal - expenseTotal
    incomeDisplay.innerText = 'Income: $'+incomeTotal
    remainingBalanceDisplay.innerText = `Remaining Balance: $${remainingBalance}`
    expenseTotalDisplay.innerText = `Total Expenses: $${expenseTotal}`  
}
