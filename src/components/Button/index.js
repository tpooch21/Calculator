import React from 'react';
import Button from './Button';
import classes from '../ButtonGrid/ButtonGrid.module.css';

const button = ({ val }) => (
  <button className={classes[val[1]]}>{val[0]}</button>
);

export default button;