import { MongoClient } from "mongodb";

async function newCarHandler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Orlinzer:LcEprysbTZC7foR5@cluster0.m6unc3c.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const carsCollection = db.collection("cars");
    const result = await carsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Car inserted !" });
  }
}

export default newCarHandler
