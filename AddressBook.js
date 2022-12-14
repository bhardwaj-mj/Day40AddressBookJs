console.log("Welcome to Address book Program");
const nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-Z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp('^\\d{2}(\\s{1}\\d{10})$');
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address=params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7]
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    get email() {
        return this._email;
    }

    set firstName(firstName) {
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "FIRST NAME is Incorrect ";
    }

    set lastName(lastName) {
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "LAST NAME is Incorrect ";
    }

    set address(address) {
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "ADDRESS is Incorrect";
    }

    set city(city) {
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "CITY is Incorrect";
    }

    set state(state) {
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw "STATE is Incorrect";
    }

    set zip(zip) {
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "ZIP is Incorrect";
    }

    set phoneNumber(phoneNumber) {
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "PHONE NUMBER is Incorrect";
    }

    set email(email) {
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "EMAIL ADDRESS is Incorrect";
    }

    toString() {
        return "First Name : " + this.firstName +
         "\nLast Name : " + this.lastName + 
         "\nAddress : "+ this.address +
         "\nCity : " + this.city + 
         "\nState : " + this.state + 
         "\nZip : " + this.zip + 
         "\nPhone Number : " + this.phoneNumber +
          "\nEmail : " + this.email;
    }
}
try {
let contact = new Contact("Manoj", "Bhardwaj", "Rajivcolony", "Safidon", "Haryana", "126112", "91 9999999999", "abc@gmail.com");
console.log(contact.toString());
} catch (e) {
    console.log(e);
}
