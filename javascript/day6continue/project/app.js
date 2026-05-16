class BankAccount {

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance
    }

    /*
    Methods
        1. deposit
        2. Withdrawl
        3. showing the balance
    */
    //1. deposit
    deposit(amount) {
        // this.amount = amount;

        //add amount to balance
        // this.balance = balance + amount
        this.balance += amount

        return `Rs. ${amount} deposited`
    };

    //2. withdrawl
    withdrawl(amount) {
        this.amount = amount;

        if (amount > this.balance) {
            return "Insufficient balance"
        }

        //subtraction
        // this.balance = balance - amount'
        this.balance -= amount

        return `Rs ${amount} withdrawl successfully`
    }

    //3. showing the balance
    getBalance() {
        console.log(this.balance)
        return `Current Balance is: ${this.balance}`
    }
}

const myAccount = new BankAccount()
const output = document.getElementById("output")

//Deposit function


function depositMoney() {
    const amount = Number(document.getElementById("amount").value)

    //validation
    if (amount <= 0) {
        output.innerHTML = "please enter valid amount"
        return
    }

    const message = myAccount.deposit(amount)

    output.innerHTML = `${message} ${myAccount.getBalance()}`
}

//withdrawl function
function withdrawMoney() {
    const amount = Number(document.getElementById("amount").value)

    //validation
    if (amount <= 0) {
        output.innerHTML = "please enter valid amount"
        return
    }

    const message = myAccount.withdrawl(amount)

    output.innerHTML = `${message} ${myAccount.getBalance()}`
}

//assignment is to show the current balance in the UI