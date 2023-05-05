import { Fragment } from "react";
import classes from "./AddCar.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addCarActions } from "../hooks/reducers/addCarSlice";

function AddCar(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { brand, model, description, error } = useSelector(
    (state) => state.addCar
  );

  function carBrandHandler(e) {
    dispatch(addCarActions.setBrand(e.target.value));
  }

  function carModelHandler(e) {
    dispatch(addCarActions.setModel(e.target.value));
  }

  function carDescriptionHandler(e) {
    dispatch(addCarActions.setDescription(e.target.value))
  }

  function handlerSubmit(e) {
    e.preventDefault()

    if (!brand || !model || !description) {
        return dispatch(addCarActions.setError('All fields must be filled !'))
    }

    const newCar = {
      brand: brand,
      model: model,
      description: description
    }

    props.onAddCar(newCar)

    router.replace('/cars')
    dispatch(addCarActions.clearForm())
  }

  return (
    <Fragment>
      <div className={classes.form}>
        <form onSubmit={handlerSubmit}>
          <h1>Add Car</h1>
          <hr />
          <div className={classes.content}>
            <div className={classes.field}>
              <input
                className={classes.input}
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={carBrandHandler}
              />
            </div>
            <div className={classes.field}>
              <input
                type="text"
                placeholder="Model"
                value={model}
                onChange={carModelHandler}
              />
            </div>
            <div className={classes.field}>
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={carDescriptionHandler}
              />
            </div>
            {error && <span className={classes.error}>{error}</span>}
          </div>
          <div className={classes.action}>
            <button className={classes.button}>Add</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AddCar;
