import logo from './logo.svg';
import './App.css';
import Article from "./components/Article"
import {TextInput}from"./components";

function App() {
  return (
    <div>
      <TextInput />
      <Article
        title={'タイトル欄'}
        content={'コンテント欄'}
      />
    </div>
  );
}

export default App;
