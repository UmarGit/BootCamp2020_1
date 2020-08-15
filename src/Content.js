import React from 'react';

function Content(props) {
  return (
    <div className="Content">
        <h1>{props.content}</h1>
        <br/>
    </div>
  );
}

export default Content;
