import React from 'react';
import classes from '../ButtonGrid/ButtonGrid.module.css';

const button = ({ val, onClick }) => (
  <button
    className={classes[val[1]]}
    onClick={onClick}>{val[0]}</button>
);

export default button;