import "./App.css";
import Congrats from "./Congrats";
import GuessWords from "./GuessedWords";

import Input from "./input";


function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

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
