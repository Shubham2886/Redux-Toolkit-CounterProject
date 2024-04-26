import './App.css';
import { Counter } from './features/counter/Counter'; // Assuming your counter component is named Counter

function App() {
  return (
    <div className="App">
      <Counter /> {/* Render the Counter component here */}
    </div>
  );
}

export default App;
