import React from 'react'

function Buttons({rollDice, updateNames}) {
  return (
    <div className='btn-wrapper'>
    <button onClick={rollDice} className='roll'>Roll the Dice</button>
      <button onClick={updateNames} className='edit'>Edit Names</button>  
    </div>
    
  )
}

export default Buttons