import React from 'react';

const withWrapClass = (Wrap, className) =>{

return (props)=> (

<div className = {className}>
    <Wrap />
        

    </div>

)

};

export default withWrapClass;