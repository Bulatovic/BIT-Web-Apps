
class User {
    constructor(userData) {
        console.log(userData);
        this.id = userData.login.uuid;
        this.name = userData.name.first;
        this.picture = userData.picture.large;
        this.email = userData.email;
        this.birthday = userData.dob.date;
        this.gender = userData.gender;
    }
    getEmail() {
        const [username, domain] = this.email.split("@");
        let first = username.charAt(0);
        let last = username.charAt(username.length - 1);
        return `${first}...${last}@${domain}`
    }
    getBirthday() {
        let date = new Date(this.birthday).getDate();
        let month = new Date(this.birthday).getMonth();
        let year = new Date(this.birthday).getFullYear();

        return `${date}.${month}.${year} `
    }
}
export default User