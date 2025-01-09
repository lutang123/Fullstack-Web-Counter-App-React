// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  // Fetch the counter value from the backend
  useEffect(() => {
    fetch('http://localhost:3000/counter') // Adjust the URL to match your backend
      .then((response) => response.json())
      .then((data) => setCounter(data.counter))
      .catch((error) => console.error('Error fetching counter:', error));
  }, []);

  // Increment the counter
  const incrementCounter = () => {
    fetch('http://localhost:3000/increment', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => setCounter(data.counter))
      .catch((error) => console.error('Error incrementing counter:', error));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Counter App</h1>
      <p>Counter value from backend:</p>
      <h2>{counter}</h2>
      <button onClick={incrementCounter} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Increment Counter
      </button>
    </div>
  );
}

export default App;
