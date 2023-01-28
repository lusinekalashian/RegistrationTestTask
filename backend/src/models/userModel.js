class UsersModel {
    constructor() {
        const db = 'users';
        const collection = 'users';
        this.client = mongoClient.db(db).collection(collection);
    }

    async createUser(data) {
        const {username, email, password} = data;
        return  this.client.insertOne({
            username,
            email,
            password
        });
    }

    async getUserByEmail(email) {
        return this.client.findOne({ email });
    }
}

export default UsersModel;
