import "./App.css";
import Congrats from "./Congrats";
import GuessWords from "./GuessedWords";

function App() {
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
