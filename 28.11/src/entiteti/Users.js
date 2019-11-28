
class User {
    constructor(userData) {
        this.id = userData.login.uuid;
        this.name = userData.name.first;
        this.picture = userData.picture.medium;
        this.email = userData.email;
        this.age = userData.dob.age;
    }
}



export default User