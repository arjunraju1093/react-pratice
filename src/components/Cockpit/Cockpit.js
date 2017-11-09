import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) =>{

const c = [];

let buttonClass = '';

if(props.Person.length<=2) {

  c.push(classes.red);
}

if(props.Person.length<=1){
  c.push(classes.bold);
}

if(props.sc){
    buttonClass = classes.red;
}


return( 
    <div className = {classes.App}>
<h1 className='global'>  {props.title} </h1>
        <p  className = {c.join(' ')}  >   This is working </p>
        <button  className= {buttonClass} onClick = {props.togglePersons} > Toggle below content </button>
        </div>
        )

        /*return( 
    <Aux className={classes.App}>
<h1 className='global'>  {props.title} </h1>
        <p  className = {c.join(' ')}  >   This is working </p>
        <button  className= {buttonClass} onClick = {props.togglePersons} > Toggle below content </button>
        </Aux>
        )*/

}

export default Cockpit;