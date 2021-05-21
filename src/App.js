import { useEffect } from 'react';
import "./App.css";
import Congrats from "./Congrats";
import GuessWords from "./GuessedWords";

import Input from "./input";
import { getSecretWord } from './actions';
import { useSelector } from 'react-redux';


function App() {
  const success = useSelector(state => state.success);
  const secretWord = 'party';
  const guessedWords = useSelector(state => state.guessedWords);

  useEffect(() => {
    getSecretWord();
  }, [])

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input secretWord={secretWord} success={success} />
      <GuessWords
        guessedWords={guessedWords}
      />
    </div>
  );
}

export default App;
