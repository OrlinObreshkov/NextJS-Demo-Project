import classes from './CarElement.module.css'

function CarElement(props) {
  return (
    <li className={classes['car-element']}>
      <div>
        <p>{props.brand}</p>
        <p>{props.model}</p>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default CarElement;
