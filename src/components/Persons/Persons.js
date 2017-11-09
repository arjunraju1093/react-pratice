import React from 'react';
import Person from './Person/Person';

const Persons = (props) => (
props.Person.map((person , index) => {
  return (
        <Person  key= {person.id} 
         name = {person.name} 
         age= {person.age}  
         click= {props.removePerson.bind(this, index)}
     change = { (event) => {props.nameChangeHandler(event, person.id)}}
      />
     
 )
  })

)


export default Persons;