import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props){
    super(props);
    console.log('[Persons.js] inside constructor method');
  }

  componentWillMount(){
    console.log('[Persons.js] inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] inside componentDidMount()');
  }

render(){

console.log('[Persons.js] inside render method');
  return (
this.props.Person.map((person , index) => {
  return (
        <Person  key= {person.id} 
         name = {person.name} 
         age= {person.age}  
         click= {this.props.removePerson.bind(this, index)}
     change = { (event) => {this.props.nameChangeHandler(event, person.id)}}
      />
     
 )
  })
  )
}

}


export default Persons;