import { Fragment } from "react";
import CarElement from "./CarElement";
import classes from './AllCars.module.css'

function AllCars(props) {
  return (
    <Fragment>
      <ul className={classes['cars-container']}>
        {props.cars.map((car) => (
          <CarElement
            key={car.id}
            id={car.id}
            brand={car.brand}
            model={car.model}
            description={car.description}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default AllCars;
