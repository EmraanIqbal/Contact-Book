import { Provider } from "react-redux";
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/elements/Navbar";
import store from "./store";
import "./styles/App.scss";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/contacts/add/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
