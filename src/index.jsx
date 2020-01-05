import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';

function App() {
  return (
    <Nav />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
