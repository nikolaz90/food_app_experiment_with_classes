class User {
    //instance count initializer
    static lastKey = 0
    key

    constructor(name, userName = "none", pw = 0, email = "none"){
        this.name = name,
        this.userName = userName,
        this.pw = pw, 
        this.email = email
        this.key = ++User.lastKey
    }
}

export default User

