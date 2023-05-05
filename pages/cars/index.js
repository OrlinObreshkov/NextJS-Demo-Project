import AllCars from "@/components/Cars/AllCars";
import { MongoClient } from "mongodb";

function CarsList(props) {
  return <AllCars cars={props.cars}/>;
}

export async function getStaticProps() {
  const clien = await MongoClient.connect(
    "mongodb+srv://Orlinzer:LcEprysbTZC7foR5@cluster0.m6unc3c.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = clien.db();
  const carsCollection = db.collection("cars");
  const cars = await carsCollection.find().toArray();
  clien.close();

  return {
    props: {
      cars: cars.map((car) => ({
        id: car._id.toString(),
        brand: car.brand,
        model: car.model,
        description: car.description,
      })),
    },
    revalidate: 1,
  };
}

export default CarsList;
