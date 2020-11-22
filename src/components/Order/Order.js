import React from 'react';
import classes from './Order.module.css';

const order = (props) => (
  <div className={classes.Order}>
    <h3>Ingredients</h3>
    <ul>
      {Object.keys(props.ingredients).map((ingred) => {
        return (
          <li>
            <span style={{ textTransform: 'capitalize' }}>{ingred}</span>:{' '}
            {props.ingredients[ingred]}
          </li>
        );
      })}
    </ul>
    <p>
      Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
  </div>
);

export default order;
