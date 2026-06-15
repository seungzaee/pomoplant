import "./App.css";
import Plant from "./components/Plant";
import Timer from "./components/Timer";
import StatusPanel from "./components/StatusPanel";

function App() {
  return (
    <div className="app">
      <h1>POMOPLANT 🌱</h1>

      <Plant />
      <Timer />
      <StatusPanel />
    </div>
  );
}

export default App;
