import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';


class App extends Component {
 
 state = {
 Person : [
   {
     id:1,
     name : 'Raj', age : 28
   },
   {
     id:2,
  name : 'Arjun',age : 29
   }
 ],
showContent : false

}

removePerson = (index) =>{
//const person = this.state.Person.slice(); //copying array
const person = [...this.state.Person]
person.splice(index,1);
this.setState({
  Person : person
})
}


nameChangeHandler = (event, id) =>{

const personIndex = this.state.Person.findIndex( p =>{
return p.id ===id;
})

const persons = [...this.state.Person];

persons[personIndex].name = event.target.value;

this.setState({
  Person : persons
});
}

togglePersons = () =>{
this.setState(
  { 
    showContent : !this.state.showContent
  }
)

}


 
  render() {



let persons  = null;

const c = [];

let buttonClass = '';

if(this.state.Person.length<=2) {

  c.push(classes.red);
}

if(this.state.Person.length<=1){
  c.push(classes.bold);
}

if(this.state.showContent){

  persons = (
<div>
  {this.state.Person.map((person , index) => {
  return (
   <Person key= {person.id} name = {person.name} age= {person.age}  click= {this.removePerson.bind(this, index)}
     change = { (event) => {this.nameChangeHandler(event, person.id)}}
      />
 )
  })}
    </div>
  )

buttonClass = classes.red;
 
}


    return (
      // class cannot be used to give class because class is reserved word in js
      //own components should always be uppercase starting with
      //all lower cases are html5 tags
      // .bind(this, new name);
      //using arrow to bind is inefficient 'blah blah thing'
//<button  style= {style} onClick = {() => this.switchNameHandler('Blah blah') } >Switch Name</button>


      <div className={classes.App}  >
        <h1 className='global'>  I am react </h1>
        <p  className = {c.join(' ')}  >   This is working </p>
        
        <button  className= {buttonClass} onClick = {this.togglePersons} > Toggle below content </button>
   {persons}
      </div>

      //this should have one parent 

      //can pass events as props
    ); 

//above will be compiled to below
 //   return React.createElement('div',{ className : 'App' } , React.createElement('h1', null, 'Hi, I\'m react app'));
  }
}

export default App;
