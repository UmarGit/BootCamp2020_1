import React from 'react';

function Body(props) {
  return (
    <main className="Body">
        <h1>{props.content1}</h1>
        <br/>
        <br/>
        {props.content2} <span role="img" aria-label="emoji">😍</span>
    </main>
  );
}

export default Body;
