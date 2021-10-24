import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./common/Navbar";
import LoginScreen from "./screens/LoginScreen";
import ProtectedRoute from "./common/ProtectedRoute";
import AuthenticatedRoute from "./common/AuthenticatedRoute";
function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Switch></Switch>

        <Navbar />
        <div className="main">
          <Switch>
            <ProtectedRoute
              exact
              path="/login"
              component={LoginScreen}
            ></ProtectedRoute>

            <Route path="/gallery" component={AuthenticatedRoute} exact></Route>
            <Route path="/admin" component={AuthenticatedRoute} exact></Route>
            <Route path="/" component={AuthenticatedRoute} exact></Route>

          </Switch>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
