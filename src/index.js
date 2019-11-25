import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleClickFunction = (event)=>{
  event.target.innerText = "Happy to be clicked"
  // console.log(`callback function triggered by ${event.target}`)
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClickFunction} />
  </div>,
  document.getElementById('root')
);