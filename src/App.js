import { useEffect } from 'react';
import "./App.css";
import Congrats from "./Congrats";
import GuessWords from "./GuessedWords";

import Input from "./input";
import { getSecretWord } from './actions';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const success = useSelector(state => state.success);
  const secretWord = useSelector(state => state.secretWord);
  const guessedWords = useSelector(state => state.guessedWords);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSecretWord());
  }, [])

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <div>The secret word is {secretWord}</div>
      <Congrats success={success} />
      <Input secretWord={secretWord} success={success} />
      <GuessWords
        guessedWords={guessedWords}
      />
    </div>
  );
}

export default App;
