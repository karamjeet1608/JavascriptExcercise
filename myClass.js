class User
{
    constructor (firstname, lastname, credit)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName()
    {
        let fullname = '${this.firstname} ${this.lastname} is my full name';
        return fullname;
    }
}

const john = new User("John","Sammy",32);
console.log(john);
console.log(john.getFullName());

