import './App.css';

// Components
import InputTodo from './components/InputTodo';

function App() {
  return (
      <div className="container">
        <h1 className="text-center mt-5">Pern Todo List</h1>
        <InputTodo />
      </div>
  );
}

export default App;