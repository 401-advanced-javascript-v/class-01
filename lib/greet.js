'use strict';


module.exports = exports = (...name) => {
    console.log(typeof name[0]);
    console.log(name.length);
    
    if(typeof name[0] !== 'string'){return null}
    if(name.length !== 1){return null}
    console.log(typeof name);
    console.log(name.length);
    console.log( `Hello ${name}` );
  };