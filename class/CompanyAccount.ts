import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    cnpj: number;

    constructor(cnpj: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.cnpj = cnpj;
    }

    getLoan = (): void => {
        console.log("Get loan");
    }

    deposit = (): void => {
        console.log("The company deposit!");
    }
}