import { BrowserRouter, Switch } from "react-router-dom";

import Navbar from "./common/Navbar";
import ProtectedRoute from "./common/ProtectedRoute";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Navbar />
        <div className="main">
          <Switch>
            <ProtectedRoute
              exact
              path="/login"
              component={LoginScreen}
            ></ProtectedRoute>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
