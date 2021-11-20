import logo from './logo.svg';
import './App.css';
import Article from "./components/Article"

function App() {
  return (
    <div>
      <Article
        title={'タイトル欄'}
        content={'コンテント欄'}
      />
    </div>
  );
}

export default App;
