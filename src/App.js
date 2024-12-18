import { useEffect, useState } from "react";
import axios from 'axios';
//外部套件
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {
  const [text, seText] = useState('');
  const onChangeHandler = (e) => {
    seText(e.target.value);
  }

  useEffect(() => {
    (async() => {
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        {text}
        <Input id="samle" text="這是一個 input" value={text} onChange={onChangeHandler}></Input>
      </header>
    </div>
  );
}

export default App;
