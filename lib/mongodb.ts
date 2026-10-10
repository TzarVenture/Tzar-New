import { MongoClient } from "mongodb";

function getMongoUri(): string {
  const envUri = process.env.MONGODB_URL || "";
  // Bypass Windows Node SRV DNS querySrv ECONNREFUSED bug by using direct replica set nodes
  if (envUri.includes("cluster0.17k1a6z.mongodb.net")) {
    return "mongodb://contacttzar:Tzar%401234@ac-9ydc9jk-shard-00-00.17k1a6z.mongodb.net:27017,ac-9ydc9jk-shard-00-01.17k1a6z.mongodb.net:27017,ac-9ydc9jk-shard-00-02.17k1a6z.mongodb.net:27017/contact_db?ssl=true&replicaSet=atlas-3a1m4z-shard-0&authSource=admin&retryWrites=true&w=majority";
  }
  return envUri;
}

const uri = getMongoUri();

if (!uri) {
  throw new Error("Please add your MONGODB_URL to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // Prevent multiple connections during hot reload in Next.js
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
