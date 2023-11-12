import React from 'react'


function Scores(props) {
  return (
    <>
      <h4>From Sub Child Page Print Scores</h4>
      <div>
        <ul>
          {props.score.map(item => 
            <div>
              <h5>Each Score - Start Print Here</h5>
              <li>{item.date}</li>
              <li>{item.score}</li>
              <h5>Each Score - End Print Here</h5>
            </div>
          )}
        </ul> 
      </div>    
    </>
  )
}

export default Scores