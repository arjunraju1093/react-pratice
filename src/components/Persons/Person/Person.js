import React from 'react';
import  classes from './Person.css';


//this.props in case of state classes

const person = (props) => {

 return (
 <div className = {classes.Person}>
<p onClick = {props.click} > I am {props.name} and I am  {props.age}  years old! </p>
<p> {props.children} </p>
<input type="text" onChange = {props.change}  value={props.name} />
 </div>
 )
}

export default person;