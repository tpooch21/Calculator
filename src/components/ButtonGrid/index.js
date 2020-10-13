import React from 'react';
import Button from '../Button/index';
import classes from './ButtonGrid.module.css';

const buttonValues = [
  ['clear', 'clear'],
  ['=', 'equals'],
  ['+', 'plus'],
  ['7', 'seven'],
  ['8', 'eight'],
  ['9', 'nine'],
  ['-', 'minus'],
  ['4', 'four'],
  ['5', 'five'],
  ['6', 'six'],
  ['x', 'times'],
  ['1', 'one'],
  ['2', 'two'],
  ['3', 'three'],
  ['/', 'divide']
];

const ButtonGrid = props => (
  <div className={classes.ButtonGrid}>
    {buttonValues.map(val => (
        <Button
          key={val[1]}
          val={val}/>
    ))}
  </div>
);

export default ButtonGrid;