import React from 'react'
import Scores from './Scores';

function Student(props) {
  return (
   <>
    <div>
      <h2>From Child Page to Print Student Info</h2>
      <div>
        <ul>
          {props.students.map(item => 
            <div> 
              <h3>Each Student - Start Print Here</h3>
              <li>{item.name}</li>
              <li>{item.bio}</li>
              <Scores score={item.scores}/>
              <h3>Each Student - End Print Here</h3>
            </div>
          )}
        </ul> 
      </div>
    </div>
  </>
  )
}

export default Student