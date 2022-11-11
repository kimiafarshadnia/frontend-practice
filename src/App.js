import "./App.css";
import ExpenseApp from "./pages/ExpenseApp";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/" component={ExpenseApp} />
    </Switch>
  );
}

export default App;
