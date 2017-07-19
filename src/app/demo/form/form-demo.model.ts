export class Profile {
    fname: string;
    lname: string;
    email: string;
    rank: number;

    constructor(fname?: string, lname?: string, email?: string, rank?: number) {
        this.fname = fname || '';
        this.lname = lname || '';
        this.email = email || 'dummy@mail.com';
        this.rank = rank || 10;
    }
}
