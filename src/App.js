import "./App.css";
import ChatComponent from "./components/ChatComponent/ChatComponent";
import InputComponent from "./components/InputComponent/InputComponent";

function App() {
  return (
    <div className="App">
    <header className="appHeader">Stubbs test-task</header>
      <div className="container">
        <ChatComponent />
        <InputComponent />
      </div>
    </div>
  )
}

export default App;
