import React from 'react';

function Die({face}) {
  return (
    <div>
        <i className={`die fas fa-dice-${face}`}/>
    </div>
  )
}

export default Die