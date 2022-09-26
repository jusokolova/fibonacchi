import './App.css';
import { useFibonacci } from './useFibonacci';

function App() {
  const { prevButtonDisabled, numbersToDisplay, handleForward, handleBack, backgroundColor } = useFibonacci();

  return (
    <div className="App">
      <button className="button" onClick={handleBack} disabled={prevButtonDisabled}>
        Prev
      </button>
      <div className="cards">
        {numbersToDisplay?.map((number, index) => (
          <div key={index.toString()} className="card" style={{ backgroundColor: backgroundColor(number) }}>
            {number}
          </div>
        ))}
      </div>
      <button className="button" onClick={handleForward}>
        Next
      </button>
    </div>
  );
}

export default App;
