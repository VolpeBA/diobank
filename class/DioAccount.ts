export abstract class DioAccount {
    private _name: string
    private readonly _accountNumber: number
    private _balance: number = 100
    private _status: boolean = true

    constructor(name: string, accountNumber: number) {
        this._name = name
        this._accountNumber = accountNumber
    }


    get name(): string {
        return this._name
    }

    get accountNumber(): number {
        return this._accountNumber
    }

    get balance(): number {
        return this._balance
    }

    get status(): boolean {
        return this._status
    }

    set name(value: string) {
        this._name = value
    }

    set balance(value: number) {
        this._balance = value
    }

    set status(value: boolean) {
        this._status = value
    }

    deposit(amount: number): void {
        this._balance += amount
        console.log(`Deposit ${amount}. New balance: ${this._balance}`)
    }

    withdraw(amount: number): void {
        if (this.validadeStatus() && this._balance >= amount) {
            this._balance -= amount;
            console.log(`Withdraw ${amount}. New balance: ${this._balance}`);
        } else {
            console.log("Invalid status or insufficient balance");
        }
    }

    private validadeStatus(): boolean {
        if (this._status) {
            return this._status
        }

        throw new Error("Account is invalid")
    }
}