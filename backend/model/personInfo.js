class PersonInfo {
    name;
    phoneNum;
    age;

    constructor(body) {
        this.name = body.name;
        this.phoneNum = body.phoneNum;
        this.age = body.age;
    }
}
module.exports = PersonInfo;
