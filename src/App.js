import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./container/Home/Home";
import GifDetails from "./container/GifDetails/GifDetails";
import Header from "./container/Header/Header";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/:id">
                        <GifDetails />
                    </Route>
                    <Route>
                        <p> No page rendered</p>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
