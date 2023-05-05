import AddCar from "@/components/Cars/AddCar";

function NewCar() {
  async function addCarHandler(newCarData) {
    const response = await fetch("/api/new-car", {
      method: "POST",
      body: JSON.stringify(newCarData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
  }

  return <AddCar onAddCar={addCarHandler} />;
}

export default NewCar;
