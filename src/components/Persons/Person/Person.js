import React, {Component} from 'react';
import  classes from './Person.css';


//this.props in case of state classes

class Person extends Component{

    constructor(props){
        super(props);
        console.log('[person.js] inside constructor()');
    }

    componentWillMount(){
        console.log('[Peron.js] inside componentWillMount()');
    }
    
    componentDidMount(){
        console.log('[Person.js] inside componentDidMount()');
    }

    componentWillUnmount(){
        console.log('[Person.js] inside componentWillUnMount()');
    }

render(){
console.log('[Person.js] inside render method');

 return( <div className = {classes.Person}>
<p onClick = {this.props.click} > I am {this.props.name} and I am  {this.props.age}  years old! </p>
<p> {this.props.children} </p>
<input type="text" onChange = {this.props.change}  value={this.props.name} />
 </div>)
}
}



export default Person;