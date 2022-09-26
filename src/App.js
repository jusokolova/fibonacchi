import './App.css';

import { Button, Card } from './components';

import { useFibonacci } from './useFibonacci';

function App() {
  const { prevButtonDisabled, numbersToDisplay, handleForward, handleBack, backgroundColor } = useFibonacci();

  return (
    <div className="App">
      <Button disabled={prevButtonDisabled} onClick={handleBack}>
        Prev
      </Button>

      <div className="cards">
        {numbersToDisplay?.map((number, index) => (
          <Card
            key={index.toString()}
            className="card"
            style={{ backgroundColor: backgroundColor(number) }}
          >
            {number}
          </Card>
        ))}
      </div>

      <Button onClick={handleForward}>
        Next
      </Button>
    </div>
  );
}

export default App;
