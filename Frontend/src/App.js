import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Register from "./components/Register";
// import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";

export const config = {
  endpoint: `https://qkart-backend-afrf.onrender.com/api/v1`,
  // endpoint: `http://localhost:8082/api/v1`,
};

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/thanks" component={Thanks} />
          </Switch>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
