import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Nav from './components/Nav'

function App() {
  return (
    <Nav></Nav>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();


