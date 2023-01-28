import {MongoClient} from "mongodb";

class MongoDBClient {
    async connect () {
        const uri = `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_URL}/test?retryWrites=true&w=majority`;
        const client = new MongoClient(uri);

        try {
            await client.connect();
            console.log("MongoDB connection is succeed!")
        } catch (e) {
            console.error('eeee', e);
        }

        return client;
    }
}

export default new MongoDBClient;



