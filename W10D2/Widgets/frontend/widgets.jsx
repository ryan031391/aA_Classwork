console.log("webpack is working");

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root />, main);
})

function Root() {
  const tabs = [
    { title: "one", content: "I am the first" },
    { title: "two", content: "Seconds pane here" },
    { title: "three", content: "Third pane here" }
  ];

  return <div>
    <Clock />
    <Tabs tabContent={tabs}/>
  </div>
}

