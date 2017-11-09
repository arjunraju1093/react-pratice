import React, { PureComponent } from 'react';
import classes from './App.css';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import withWrapClass from '../hoc/withClassWrap';
import Aux from '../hoc/Aux';


class App extends PureComponent {


  constructor(props){
    super(props);
this.state = {
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

console.log('[App.js] inside constructor');
  }
 
 componentWillMount(){
console.log('[App.js] inside componentWillMount()');

 }

 componentDidMount(){
   console.log('[App.js] inside componentDidMount()');
 }

// shouldComponentUpdate(nextProps, nextState){

// console.log('[App.js], inside shouldCOmponentUpdate() method');
// return true;
// }
// will be taken care by PureComponent class

componentWillUpdate(nextProps, nextState){
  console.log('[App.js],inside componentWillUpdate() method');
}

componentDidUpdate(){
  console.log('[App.js], inside componentDidUpdate() method');
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

console.log('[App.js] inside render method');

let persons  = null;



if(this.state.showContent){

  persons = (
<div>

  <Persons Person = {this.state.Person} 
   removePerson = {this.removePerson}
   nameChangeHandler = {this.nameChangeHandler}
     />
  
    </div>
  )


 
}


    return (
      // class cannot be used to give class because class is reserved word in js
      //own components should always be uppercase starting with
      //all lower cases are html5 tags
      // .bind(this, new name);
      //using arrow to bind is inefficient 'blah blah thing'
//<button  style= {style} onClick = {() => this.switchNameHandler('Blah blah') } >Switch Name</button>


  //     {/*<WithClass class={classes.App}  >
  //      <Cockpit title = {this.props.title} togglePersons = {this.togglePersons} Person = {this.state.Person} sc = {this.state.showContent} />
  //  {persons}
  //     </WithClass>*/}
<Aux>
       <Cockpit title = {this.props.title} togglePersons = {this.togglePersons} Person = {this.state.Person} sc = {this.state.showContent} />
         {persons}
</Aux>
      //this should have one parent 

      //can pass events as props
    ); 

//above will be compiled to below
 //   return React.createElement('div',{ className : 'App' } , React.createElement('h1', null, 'Hi, I\'m react app'));
  }
}

export default withWrapClass(App, classes.App);
