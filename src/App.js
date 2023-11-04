import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import store from "./redux/store";
import ToDo from "./components/ToDo";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <Counter />
          <ToDo />
        </div>
      </div>
    </Provider>
  );
}

export default App;
