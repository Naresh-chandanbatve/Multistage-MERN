
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const url = 'http://localhost:5000/api' 	

  useEffect(() => {
    axios.get(url)
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Hello World from React!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
