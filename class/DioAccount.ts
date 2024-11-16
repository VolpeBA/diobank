export abstract class DioAccount {
    name: string;
    accountNumber: number;
    balance: number = 0;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (): void => {
        console.log("Deposit");
    }

    withdraw = (): void => {
        console.log("Withdraw");
    }

    getBalance = (): void => {
        console.log(this.balance);
    }
}