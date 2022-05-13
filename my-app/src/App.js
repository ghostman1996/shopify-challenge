
import './App.css';

function App() {
  return (
    <>
    <h1>Fun with AI</h1>
    <form>
      <label>Enter prompt
        <input type="text" />
      </label>
      <button>Submit</button>
    </form>
    <h2>Responses</h2>
    <div classname="responses">
      <h5>Prompt:</h5>
      <h5>Response: </h5>
    </div>
    </>
  );
}

export default App;
