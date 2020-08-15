import React from 'react';
import Content from './Content';

function Body(props) {
  return (
    <main className="Body">
        <Content content="React is a JavaScript library for building user interfaces and I love React !"/>
        <Content content="React is Declarative"/>
        <Content content="React is Component-Based"/>
        <Content content="React is Learn Once, Write Anywhere"/>
        <br/>
        {props.caption} <span role="img" aria-label="emoji">😍</span>
    </main>
  );
}

export default Body;
