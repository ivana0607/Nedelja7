import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

let text = 'Hello World!'
let url = 'https://techcrunch.com/wp-content/uploads/2020/02/ASL_emoji_9.jpg?w=1500&crop=1'

function App() {
  return (
    <Card text={text} url={url} />
  );
}

export default App;
