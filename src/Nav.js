import React from 'react';

function Nav(props) {
  return (
    <header className="Nav">
       <span role="img" aria-label="emoji">❤️</span> {props.header} <span role="img" aria-label="emoji">❤️</span>
    </header>
  );
}

export default Nav;
