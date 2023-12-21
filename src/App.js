import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import store from "./redux/store";
import ToDo from "./components/ToDo";
import User from "./components/User";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <Counter />
          <ToDo />
          <User />
        </div>
      </div>
    </Provider>
  );
}

export default App;
