import React from 'react';
import Route from 'react-router-dom/Route';

const content = (props) => {
    if (props.option === '') {
        return null;
    }
   else if (props.option === 'people') {
       console.log(props.content);

    // return(    
    // //<Route path="/users" render = {() => <ul> {props.content} </ul> }   />
    // 'hahaha'
    // );
    }
}

export default content;

