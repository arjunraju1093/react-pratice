import React from 'react';
import './Person.css';
import Radium from 'radium';

//this.props in case of state classes

const person = (props) => {

const style = {

    '@media(min-width :500px)' : {

        backgroundColor : '#333',
        width : '450px'
    }
}

 return (
 <div className = 'Person' style = {style}>
<p onClick = {props.click} > I am {props.name} and I am  {props.age}  years old! </p>
<p> {props.children} </p>
<input type="text" onChange = {props.change}  value={props.name} />
 </div>
 )
}

export default Radium(person);