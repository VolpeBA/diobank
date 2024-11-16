import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(123,"Bruno", 123456);
peopleAccount.deposit();
// console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount(123, "Bruno", 123456);
companyAccount.deposit();
// console.log(companyAccount);	