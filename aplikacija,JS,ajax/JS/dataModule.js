

class User {
    constructor(id, username, image) {
        this.id = id;
        this.username = username;
        this.image = image;
    }
}

function fetchUsers(searchText, onSuccess) {
    const requestUrl = `https://api.github.com/search/users?q=${searchText}`;

    $.get(requestUrl, function (responseData) {
        const userList = responseData.items;

        const myUsers = [];
        for (var i = 0; i < userList.length; i++) {
            const userObject = userList[i];
            const user = new User(userObject.id, userObject.login, userObject.avatar_url)
            myUsers.push(user)

        }

        onSuccess(myUsers)

    })


}
export { fetchUsers }
