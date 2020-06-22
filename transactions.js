const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction (transaction) {
    user.transactions.push(transaction)
    if (transaction.type == 'credit') {
        user.balance += transaction.value
    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType (type) {
    let maxValue = 0
    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > maxValue) {
            maxValue += transaction.value
            higherTransaction = transaction
        } 
    } console.log (higherTransaction)
}

function getAverageTransactionValue () {
    let sum = 0
    for (let transaction of user.transactions) {
        sum += transaction.value
    } 
    let average = sum / user.transactions.length
    console.log (`Average transactions value: ${average.toFixed(2)}`)
}

function getTransactionsCount () {
    let transactionsCount = {credit: 0, debit: 0}
    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            transactionsCount.credit += 1 
        } else if (transaction.type == 'debit') {
            transactionsCount.debit += 1 
        }
    } console.log (transactionsCount)
}


createTransaction ({type: 'debit', value: 50})
createTransaction ({type: 'credit', value: 50})
createTransaction ({type: 'credit', value: 300})
createTransaction ({type: 'credit', value: 20})
createTransaction ({type: 'debit', value: 60})
createTransaction ({type: 'debit', value: 50})
createTransaction ({type: 'debit', value: 50})
createTransaction ({type: 'debit', value: 157})

console.log (user)

getHigherTransactionByType ('debit')

getAverageTransactionValue ()

getTransactionsCount()

