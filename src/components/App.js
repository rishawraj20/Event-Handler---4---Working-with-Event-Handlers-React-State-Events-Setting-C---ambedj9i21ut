import React from 'react'
import '../styles/App.css';
const App = () => {
  var time;
  const handleDoubleClick = (event) => {
    clearTimeout(time);
    if (event.detail == 1) {
      time = setTimeout(() => {
        console.log("I was not double clicked")
      }, 200)

    } else if (event.detail == 2) {

      console.log("I was double clicked")
    }
  }
  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleDoubleClick}>Double click me</button>
    </div>
  )
}


export default App;
