import logo from './logo.svg';
import './App.css';
import Article from "./components/Article"
import {TextInput, Counter}from"./components";

function App() {
  return (
    <div>
      <Article
        title={'タイトル欄'}
        content={'コンテント欄'}
      />
      <TextInput />
      <Counter />
    </div>
  );
}

export default App;
