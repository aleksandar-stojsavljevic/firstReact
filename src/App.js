import AddItem from "./AddItem";
import Header from "./Header";
import EditItem from "./EditItem";
import MainContent from "./MainContent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>
          <Route path="/add-item">
            <AddItem />
          </Route>
          <Route path="/edit-item/:id">
            <EditItem />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
