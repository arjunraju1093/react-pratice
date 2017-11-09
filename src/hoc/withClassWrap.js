import React, {Component} from 'react';

const withWrapClass = (Wrap, className) =>{

/*return (props)=> (
<div className = {className}>
    <Wrap {...props} />
    </div>
)*/


return class extends Component {

render(){

    return (
<div className = {className}>

<Wrap {...this.props} />
    </div>

    )
}

}

};

export default withWrapClass;